import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { MatDialog } from '@angular/material';

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

  latestLikedItem: MenuItem;
  isModalActive = false;

  constructor(
    private menuservice: MenuService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.menuservice.getMenu().subscribe(menu => {
      this.menu = menu;
      this.currentIndex = this.menu.length - 1; // set index to last added menuItem, last menuItem is 0 so we do '-1'
      console.log(this.menu);
    });
  }

  likeItem() {
    this.latestLikedItem = this.menu[this.currentIndex];
    this.isModalActive = true;

    // Animation
    const card = document.getElementById(this.currentIndex.toString());
    card.classList.add('animated', 'slideOutRight', 'fast');
    const div = document.getElementById('dishcard-box');
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() { div.innerHTML = ''; }, 500);
  }

  closeModal() {
    this.isModalActive = false;
  }

  unmatch() {
    this.isModalActive = false;
  }

  dislikeItem() {
    console.log('ItemDisliked');
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
      console.log('ItemPrevious');
      this.currentIndex += 1;
      const card = document.getElementById(this.currentIndex.toString());
      card.classList.remove('animated', 'slideOutLeft', 'fast');
      card.classList.add('animated', 'bounceIn', 'fast');
      // tslint:disable-next-line: only-arrow-functions
      setTimeout(function() { card.classList.add('animated', 'bounceIn', 'fast'); }, 1000);
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
