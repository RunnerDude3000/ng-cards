import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { CardConfig } from './models/card-config';
import { Card } from './models/card';

@Component({
  selector: 'ng-card',
  templateUrl: './ng-card.component.html',
  styleUrls: ['./ng-card.component.scss']
})
export class NgCardComponent implements OnInit {

  @Input() cardConfig = new CardConfig();
  @Input() cardTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
