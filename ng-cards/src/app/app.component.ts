import { Component } from '@angular/core';
import { CardConfig } from './ng-card/models/card-config';
import { Card } from './ng-card/models/card';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  cardConfig = new CardConfig({
    card: new Card({
      cardImage: 'name-of-the-wind.jpg',
      cardTitle: 'Sample Card',
      cardBodyText: 'Did you know that everyone who likes the Name of the Wind is awesome?'
    }),
    customCardTemplate: false
  });
}
