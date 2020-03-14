import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardImage = 'name-of-the-wind.jpg';
  cardTitle = 'Sample Card';
  cardBodyText = 'Did you know that everyone who likes the Name of the Wind is awesome?';
}
