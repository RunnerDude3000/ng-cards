/*tslint:disable */
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { CardConfig } from './models/card-config';

@Component({
  selector: 'ng-card',
  templateUrl: './ng-card.component.html',
  styleUrls: ['./ng-card.component.scss']
})
export class NgCardComponent implements OnInit {

  @Input() cardConfig = new CardConfig();

  constructor() { }

  ngOnInit(): void {
  }

}
