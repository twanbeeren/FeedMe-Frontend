import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishcard',
  templateUrl: './dishcard.component.html',
  styleUrls: ['./dishcard.component.css'],
})
export class DishcardComponent implements OnInit {

  animationState: string;

  constructor() { }

  ngOnInit() {
  }

}
