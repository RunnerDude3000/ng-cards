/*tslint:disable */
import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ng-card',
  templateUrl: './ng-card.component.html',
  styleUrls: ['./ng-card.component.scss']
})
export class NgCardComponent implements OnInit {

  @Input() cardImage = '';
  @Input() cardTitle = '';
  @Input() cardBodyText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
