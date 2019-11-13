import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  menu = [];
  menuitem = null;
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
  }

  getMenu() {
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.currentIndex = this.menu.length - 1; // set index to last added menuItem, last menuItem is 0 so we do '-1'
      console.log(this.menu);
    });
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
    setTimeout(function() { div.innerHTML = ''; }, 500);
  }

  closeModal() {
    this.isModalActive = false;
    this.getMenu();
    this.reload();
  }

  unmatch() {
    this.orderService.removeItem(this.latestLikedItem);
    this.getMenuForUnmatch();
  }  

  getMenuForUnmatch() {
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.menu.splice((this.currentIndex + 1), (this.menu.length - 1 - this.currentIndex));
      this.currentIndex = this.menu.length - 1;
      this.reload();
      var div = document.getElementById("dishcard-box");
      // if(div.innerHTML != ""){
      //   this.addAnimationForPreviousItems();
      // }
      this.isModalActive = false;
    });
  }

  addAnimationForPreviousItems(){
    console.log(this.menu);
    
    for(var i = this.menu.length-1; i >= this.swipedIndex; i--){
      console.log("dink " + i.toString());
      const card = document.getElementById(i.toString());
      console.log(card);
      card.classList.add('animated', 'slideOutLeft', 'fast');
    }
  }

  dislikeItem() {
    console.log('ItemDisliked');
    console.log(this.currentIndex);
    const card = document.getElementById(this.currentIndex.toString());
    console.log(card);
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
      console.log('ItemPrevious');
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

}
