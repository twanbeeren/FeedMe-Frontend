import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/core/classes/menu-item';

@Component({
  selector: 'app-dishcard',
  templateUrl: './dishcard.component.html',
  styleUrls: ['./dishcard.component.css'],
})
export class DishcardComponent implements OnInit {

  animationState: string;
  @Input() item: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
