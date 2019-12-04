import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { OrderService } from 'src/app/core/services/order.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

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
  dishRect = null;
  dislikeRect = null;
  likeRect = null;

  latestLikedItem: MenuItem;
  isModalActive = false;

  public show = true;

  // Tutorial modal
  isTutorialActive = true;
  phase = 0;

  constructor(
    private menuService: MenuService,
    private orderService: OrderService,
    private router: Router) {
  }

  ngOnInit() {
    this.getMenu();
    if (this.menuService.hasHadTutorial) {
      this.phase = 4;
    }
  }

  getDislikeRect(){
    var dislike = document.getElementById("disliked-box");
      this.dislikeRect = dislike.getBoundingClientRect();
      console.log(this.dislikeRect.top, this.dislikeRect.right, this.dislikeRect.bottom, this.dislikeRect.left);
  }

  getLikeRect(){
    var like = document.getElementById("liked-box");
    this.likeRect = like.getBoundingClientRect();
    console.log(this.likeRect.top, this.likeRect.right, this.likeRect.bottom, this.likeRect.left);
  }

  getMenu() {
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.currentIndex = this.menu.length - 1; // set index to last added menuItem, last menuItem is 0 so we do '-1'
      this.changeDragability();
    });
  }

  changeDragability() {
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
    //Werkt niet meer...
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.menu.splice((this.currentIndex + 1), (this.menu.length - 1 - this.currentIndex));
      this.currentIndex = this.menu.length - 1;
      this.changeDragability();
      this.reload();
      this.isModalActive = false;
    });
  }

  dislikeOnClick(){
    const card = document.getElementById(this.currentIndex.toString());
    card.classList.add('animated', 'slideOutLeft', 'fast');
    this.dislikeItem();
  }

  dislikeItem() {  
    this.dislikedItems.push(this.menu[this.currentIndex]);
    this.menu.splice(this.currentIndex);  
    this.nextItem();
  }

  nextItem() {
    if (!this.isLastItem()) {
      this.currentIndex -= 1;
      this.changeDragability();
    } else {
      this.router.navigate(['/regularmenu']);
    }
  }

  previousItem() {
    if (!this.isFirstItem()) {
      this.menu[this.currentIndex].dragDisabled = true;
      this.currentIndex += 1;
      this.menu.push(this.dislikedItems[this.dislikedItems.length - 1]);
      this.dislikedItems.splice(this.dislikedItems.length - 1, 1);
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

  nextPhase() {
    this.phase++;
    if (this.phase >= 4) {
      this.menuService.hasHadTutorial = true;
    }
  }

  dragStart(){
    var element =  document.getElementById(this.currentIndex.toString());
    this.dishRect = element.getBoundingClientRect();
    console.log(this.dishRect.top, this.dishRect.right, this.dishRect.bottom, this.dishRect.left);
  }

  dragReleased(){
    console.log(this.dishRect.top, this.dishRect.right, this.dishRect.bottom, this.dishRect.left);
    
    if(this.likeColide() || this.dislikeColide()){
      console.log("Hier");
    }
    else {
      console.log("Niet hier");
      this.placeDishcardBack();
    }
    
  }

  placeDishcardBack(){
    //   var element =  document.getElementById(this.currentIndex.toString());
    //   element.style.left = -this.dishRect.left/2 + 'px';
    //   element.style.top = -this.dishRect.top/2 + 'px';
  }

  likeColide(){
    this.getLikeRect();
    
    if(this.dishRect.x + this.dishRect.width > this.likeRect.x){
      console.log("jaja");
      return true;
    }    

    return false;
  }

  dislikeColide(){
    this.getDislikeRect();
    
    if(this.dishRect.x < this.dislikeRect.x + this.dislikeRect.width){
      console.log("ja");
      return true;
    }    

    return false;
  }
}
