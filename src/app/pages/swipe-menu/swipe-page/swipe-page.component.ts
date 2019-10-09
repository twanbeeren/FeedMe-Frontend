import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css']
})
export class SwipePageComponent implements OnInit {
  menu = [];
  item = null;
  index = 0;
  allSwiped = false;

  constructor(private menuservice: MenuService) {

  }

  ngOnInit() {
    this.getMenu();
    this.item = this.menu[this.index];
  }

  getMenu() {
    this.menuservice.getMenu().subscribe(menu => this.menu = menu);
  }

  likeItem() {
    console.log('ItemLiked');
    const element = document.getElementById('card');
    element.classList.add('animated', 'slideOutRight', 'fast');
  }

  dislikeItem() {
    console.log('ItemDisliked');
    const element = document.getElementById('card');
    element.classList.add('animated', 'slideOutLeft', 'fast');
    this.nextItem();
  }

  nextItem() {
    if (!this.isLastItem()) {
      this.index += 1;
      this.item = this.menu[this.index];
    } else {
      this.allSwiped = true;
    }
  }

  previousItem() {
    if (!this.isFirstItem()) {
      this.index -= 1;
      this.item = this.menu[this.index];
    } else {
      // TODO Eventuele melding
    }
  }

  isLastItem() {
    return this.index + 1 === this.menu.length;
  }

  isFirstItem() {
    return this.index === 0;
  }

}
