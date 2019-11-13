import { Component, OnInit } from '@angular/core';
import { TranslatorService } from 'src/app/core/services/translator.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  language: string;

  constructor(private translator: TranslatorService, public orderservice: OrderService) { }

  ngOnInit() {
    this.language = this.translator.getLanguage();
  }

  changeLanguage(language: string): void  {
    this.translator.setLanguage(language);
  }
}
