import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { OrderService } from 'src/app/core/services/order.service';
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
  allSwiped = false;

  latestLikedItem: MenuItem;
  isModalActive = false;

  public show = true;

  // Tutorial mdoal
  isTutorialActive = true;
  phase = 0;

  constructor(
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
    this.latestLikedItem = this.menu[this.currentIndex];
    this.orderService.addItem(this.latestLikedItem);
    this.isModalActive = true;
    this.swipedIndex = this.currentIndex;
    const card = document.getElementById(this.currentIndex.toString());
    card.classList.add('animated', 'slideOutRight', 'fast');
    const div = document.getElementById('dishcard-box');
    // tslint:disable-next-line: only-arrow-functions
    // setTimeout(function() { div.innerHTML = ''; }, 500);
  }

  closeModal() {
    this.isModalActive = false;
    this.getMenu();
    this.reload();
  }

  unmatch() {
    this.orderService.removeItem(this.latestLikedItem);
    // this.getMenuForUnmatch();

    const card = document.getElementById(this.currentIndex.toString());

    card.classList.remove('animated', 'slideOutRight', 'fast');
    card.classList.add('animated', 'bounceIn', 'fast');
    this.isModalActive = false;
  }

  getMenuForUnmatch() {
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
      // this.menu.splice((this.currentIndex + 1), (this.menu.length - 1 - this.currentIndex));

      for (let _i = 0; _i < 9999; _i++) {
        // animations toevoegen aan previous dinken
      }

      this.currentIndex = this.menu.length - 1;
      this.reload();
      this.isModalActive = false;
    });
  }

  // addAnimationForPreviousItems() {
  //   for (let i = this.menu.length - 1; i >= this.swipedIndex; i--) {
  //     const card = document.getElementById(i.toString());
  //     card.classList.add('animated', 'slideOutLeft', 'fast');
  //   }
  // }

  dislikeItem() {
    const card = document.getElementById(this.currentIndex.toString());
    card.classList.add('animated', 'slideOutLeft', 'fast');
    this.nextItem();
  }

  nextItem() {
    if (!this.isLastItem()) {
      this.currentIndex -= 1;
    } else {
      this.allSwiped = true;
    }
  }

  previousItem() {
    if (!this.isFirstItem()) {
      this.currentIndex += 1;
      const card = document.getElementById(this.currentIndex.toString());

      card.classList.remove('animated', 'slideOutLeft', 'fast');
      card.classList.add('animated', 'bounceIn', 'fast');
    } else {
      // TODO Eventuele melding
    }
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
    // setTimeout(function() { this.nextPhase(); }, 500);
    this.nextPhase();
  }

  tutorialDislike() {
    const card = document.getElementById('cardDislike');
    card.classList.add('animated', 'slideOutLeft', 'fast');
    // setTimeout(function() { this.nextPhase(); }, 500);
    this.nextPhase();
  }

  resetMenu() {
    this.menusub.unsubscribe();
    this.getMenu();
  }
}
