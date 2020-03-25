import { Component } from '@angular/core';
import { CardConfig, Card, CardButton } from 'runner-ng-ui-card';
// import { Router } from '@angular/router';

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
      ' anticipated game: Cyberpunk 2077.',
      cardButton: new CardButton({
        cardButtonText: 'More Info',
        cardButtonTextColor: 'FFFFFF',
        cardButtonColor: '#2F2F2F',
        cardButtonCallback: () => {
          window.location.href = 'https://en.cdprojektred.com/';
        }
      })
    })
  });

  customCardConfig = new CardConfig({
    customCardTemplate: true
  });

  constructor() {}

  // onCardButtonPressed() {
  //   window.location.href = 'https://en.cdprojektred.com/';
  //   // this.router.navigate(['https://en.cdprojektred.com/']).then(() => {
  //   //   console.log('navigated successfully');
  //   // }).catch((error) => {
  //   //   console.log(error);
  //   // });
  // }
}
