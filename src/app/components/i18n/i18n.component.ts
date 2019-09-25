import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {

  minutes: number = 2;
  gender: any = "female";

  constructor() { }

  ngOnInit() {
  }

}
