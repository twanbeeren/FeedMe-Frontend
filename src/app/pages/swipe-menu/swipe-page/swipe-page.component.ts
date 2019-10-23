import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { log } from 'util';
import { element } from 'protractor';

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

  constructor(private menuservice: MenuService) {

  }

  ngOnInit() {
    this.getMenu();
    this.currentIndex = this.menu.length - 1; //set index to last added menuItem, last menuItem is 0 so we do '-1'
    // this.menuitem = this.menu[this.counter];
  }

  getMenu() {
    this.menuservice.getMenu().subscribe(menu => this.menu = menu);
  }

  likeItem() {
    console.log('ItemLiked');
    const element = this.getElementWithId();
    element.classList.add('animated', 'slideOutRight', 'fast');
    const div = document.getElementById("dishcard-box");
    // div.innerHTML = "";
    setTimeout(function() {div.innerHTML = ""; }, 500);
  }

  dislikeItem() {
    console.log('ItemDisliked');
    const element = this.getElementWithId();
    element.classList.add('animated', 'slideOutLeft', 'fast');
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
      const element = this.getElementWithId();
      element.classList.remove('animated', 'slideOutLeft', 'fast');
      element.classList.add('animated', 'bounceIn', 'fast');
      setTimeout(function() {element.classList.add('animated', 'bounceIn', 'fast');}, 1000)
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

  getElementWithId(){
    var id = ""+ this.currentIndex;
    return document.getElementById(id);;
  }

}
