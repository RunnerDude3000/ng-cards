import { Component, Input, TemplateRef } from '@angular/core';
import { CardConfig } from './models/card-config';

@Component({
  selector: 'runner-ng-ui-card',
  templateUrl: './runner-ng-ui-card.component.html',
  styleUrls: ['./runner-ng-ui-card.component.scss']
})
export class RunnerNgUiCardComponent {

  @Input() cardConfig = new CardConfig();
  @Input() cardTemplate: TemplateRef<any>;

}
