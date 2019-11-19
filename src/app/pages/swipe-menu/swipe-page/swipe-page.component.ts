import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { OrderService } from 'src/app/core/services/order.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  menu = [];
  dislikedItems = [];
  likedItems = [];
  menuitem = null;
  currentIndex;
  swipedIndex;
  allSwiped = false;

  latestLikedItem: MenuItem;
  isModalActive = false;

  public show = true;

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
      this.changeDragability();
    });
  }

  changeDragability(){
    this.menu[this.currentIndex].dragDisabled = false;
  }

  likeItem() {
    this.latestLikedItem = this.menu[this.currentIndex];
    this.orderService.addItem(this.latestLikedItem);
    this.isModalActive = true;
    this.swipedIndex = this.currentIndex;
    const card = document.getElementById(this.currentIndex.toString());
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
      this.isModalActive = false;
    });
  }

  addAnimationForPreviousItems(){  
    for(var i = this.menu.length-1; i >= this.swipedIndex; i--){
      const card = document.getElementById(i.toString());
      card.classList.add('animated', 'slideOutLeft', 'fast');
    }
  }

  dislikeItem() {
    const card = document.getElementById(this.currentIndex.toString());
    // card.classList.add('animated', 'slideOutLeft', 'fast');
    this.nextItem();
    this.changeDragability();
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
      this.menu.push(this.dislikedItems[0]);
      this.dislikedItems.splice(0, 1);
      this.changeDragability();
    } else {
      // TODO Eventuele melding
    }
  }

  isLastItem() {
    return this.currentIndex === 0;
  }

  isFirstItem() {
    return this.currentIndex + 1 === this.menu.length + this.dislikedItems.length;
  }

  reload() {
    this.show = false;
    setTimeout(() => this.show = true);
  }

  dislikeDrop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.dislikeItem();
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log(this.dislikedItems);
                        console.log(this.menu);
    }
  }

  likeDrop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.likeItem();
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
