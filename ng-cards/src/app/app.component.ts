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
      cardImage: '../assets/cdpr-logo.png',
      cardTitle: 'CD Projekt Red',
      cardBodyText: 'CD Projekt Red is a game development company. Their most notable game series is the Witcher;' +
      ' a fantasy game genre based on the books by Andrzej Sapkowski. In 2020, they plan to release another highly' +
      ' anticipated game: Cyberpunk 2077.'
    })
  });

  customCardConfig = new CardConfig({
    customCardTemplate: true
  });
}
