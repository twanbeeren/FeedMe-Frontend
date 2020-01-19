import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { OrderService } from 'src/app/core/services/order.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  menu = [];
  menuitem = null;
  menusub = new Subscription();
  currentIndex;
  swipedIndex;
  tutItem: MenuItem = {
    id: 'tut',
    name: 'Pizza',
    price: 9.99,
    course: { id: 'tut', name: 'tut', priority: 1 },
    courseRef: null,
    tags: [],
    imgUrl: 'http://www.knallenopdewallen.nl/wp-content/uploads/2016/11/pizza.jpeg'
  };

  canSwipe = true;

  latestLikedItem: MenuItem;
  isModalActive = false;

  public show = true;

  // Tutorial mdoal
  isTutorialActive = true;
  phase = 0;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.getMenu();
    if (this.menuService.hasHadTutorial) {
      this.phase = 4;
    }
  }

  getMenu() {
    const sub = this.menuService.getMenu().pipe(map(items => {
      const filtered: MenuItem[] = []; // Filtered list
      items.forEach(item => {
        let value = 0; // Amount of included tags
        item.tags.forEach(tag => {
          if (this.menuService.toggledTags.includes(tag)) {
            value++;
          } // Increase value for each included tag
        });
        if (value >= this.menuService.toggledTags.length) { // Does item have all tags?
          filtered.push(item);
        }
      });
      return filtered; // Return all items with all the specified tags
    })).subscribe(menu => {
      this.menu = menu;
      this.currentIndex = this.menu.length - 1; // set index to last added menuItem, last menuItem is 0 so we do '-1'
    });

    this.menusub = sub;
  }

  likeItem() {

    const card = document.getElementById(this.currentIndex.toString());

    card.classList.add('animated', 'fadeOut', 'faster', 'hidden');
    this.delay(450).then(() => { card.classList.add('hidden'); });


    this.latestLikedItem = this.menu[this.currentIndex];
    this.orderService.addItem(this.latestLikedItem);
    this.isModalActive = true;
    this.swipedIndex = this.currentIndex;
  }

  closeModal() {
    this.isModalActive = false;
    this.getMenu();
    this.reload();
  }

  unmatch() {
    this.orderService.removeItem(this.latestLikedItem);
    const card = document.getElementById(this.currentIndex.toString());

    this.canSwipe = true;
    card.classList.remove('animated', 'fadeOut', 'faster', 'hidden');
    card.classList.add('animated', 'bounceIn', 'fast');
    this.delay(800).then(() => {
      card.classList.remove('animated', 'bounceIn', 'fast');
    });
    this.isModalActive = false;
  }

  dislikeItem() {
    const card = document.getElementById(this.currentIndex.toString());

    // this.canSwipe = false;
    card.classList.add('animated', 'fadeOut', 'faster', 'hidden');
    this.delay(450).then(() => { card.classList.add('hidden'); this.canSwipe = true; });
    this.nextItem();
  }

  private nextItem() {
    if (!this.isLastItem()) {
      this.currentIndex -= 1;
    } else {
      this.router.navigate(['/regularmenu']);
    }
  }

  previousItem() {
    if (!this.isFirstItem()) {
      this.currentIndex += 1;
      const card = document.getElementById(this.currentIndex.toString());

      this.canSwipe = true;
      card.classList.remove('animated', 'fadeOut', 'faster', 'hidden');
      card.classList.add('animated', 'bounceIn', 'fast');
      this.delay(800).then(() => {
        card.classList.remove('animated', 'bounceIn', 'fast');
      });
    }
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isLastItem() {
    return this.currentIndex === 0;
  }

  isFirstItem() {
    return this.currentIndex + 1 === this.menu.length;
  }

  reload() {
    this.show = false;
    setTimeout(() => this.show = true);
  }

  nextPhase() {
    this.phase++;
    if (this.phase >= 4) {
      this.menuService.hasHadTutorial = true;
    }
  }

  tutorialLike() {
    const card = document.getElementById('cardLike');
    card.classList.add('animated', 'slideOutRight', 'fast');
    this.nextPhase();
  }

  tutorialDislike() {
    const card = document.getElementById('cardDislike');
    card.classList.add('animated', 'slideOutLeft', 'fast');
    this.nextPhase();
  }

  resetMenu() {
    this.menusub.unsubscribe();
    this.getMenu();
  }
}
