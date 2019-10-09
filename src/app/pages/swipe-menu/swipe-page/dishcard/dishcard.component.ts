import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition} from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-dishcard',
  templateUrl: './dishcard.component.html',
  styleUrls: ['./dishcard.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      // transition('* => slideOutRight', animate(1000, keyframes(kf.slideOutRight)))
    ])
  ]
})
export class DishcardComponent implements OnInit {

  animationState: string;

  constructor() { }

  ngOnInit() {
  }

}
