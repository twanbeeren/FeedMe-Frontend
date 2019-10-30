import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  menu = [];
  menuitem = null;
  currentIndex;
  allSwiped = false;
  cardIdString: string;

  constructor(private menuservice: MenuService) {

  }

  ngOnInit() {
    this.getMenu();
    this.currentIndex = this.menu.length - 1; // set index to last added menuItem, last menuItem is 0 so we do '-1'
    // this.menuitem = this.menu[this.counter];
  }

  getMenu() {
    this.menuservice.getMenu().subscribe(menu => this.menu = menu);
  }

  likeItem(cardId: number) {
    console.log('ItemLiked');
    this.cardIdString = '' + cardId;
    const card = document.getElementById(this.cardIdString);
    card.classList.add('animated', 'slideOutRight', 'fast');
    const div = document.getElementById('dishcard-box');
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {div.innerHTML = ''; }, 500);
  }

  dislikeItem(cardId: number) {
    console.log('ItemDisliked');
    this.cardIdString = '' + cardId;
    const card = document.getElementById(this.cardIdString);
    this.currentIndex = cardId;
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
      this.cardIdString = '' + this.currentIndex;
      const card = document.getElementById(this.cardIdString);
      card.classList.remove('animated', 'slideOutLeft', 'fast');
      card.classList.add('animated', 'bounceIn', 'fast');
      // tslint:disable-next-line: only-arrow-functions
      setTimeout(function() {card.classList.add('animated', 'bounceIn', 'fast'); }, 1000);
      // this.item = this.menu[this.index];
    } else {
      // TODO Eventuele melding
    }
  }

  isLastItem() {
    return this.currentIndex === 0;
    // return this.currentIndex + 1 === this.menu.length;
  }

  isFirstItem() {
    return this.currentIndex + 1 === this.menu.length;
    // return this.currentIndex === 0;
  }

}
