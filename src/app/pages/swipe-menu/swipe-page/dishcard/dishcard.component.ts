import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/core/classes/menu-item';
import { SwipePageComponent } from '../swipe-page.component';

@Component({
  selector: 'app-dishcard',
  templateUrl: './dishcard.component.html',
  styleUrls: ['./dishcard.component.css'],
})

export class DishcardComponent implements OnInit {
  @Input('cardId') cardId: number;
  animationState: string;
  @Input() item: MenuItem;

  constructor(private swipepageComponent: SwipePageComponent) { }

  ngOnInit() {
  }

  dislike() {
    this.swipepageComponent.dislikeItem(this.cardId);
  }

  like() {
    this.swipepageComponent.likeItem(this.item);
  }

}
