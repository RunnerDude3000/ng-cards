import { Component } from '@angular/core';
import { CardConfig } from 'runner-ng-ui-card';
import { Card } from 'runner-ng-ui-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardConfig = new CardConfig({
    card: new Card({
      cardImage: '../assets/name-of-the-wind.jpg',
      cardTitle: 'Sample Card',
      cardBodyText: 'Did you know that everyone who likes the Name of the Wind is awesome?'
    }),
    customCardTemplate: false
  });
}
