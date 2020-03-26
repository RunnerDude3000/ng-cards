import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerNgUiCardComponent } from './runner-ng-ui-card.component';
import { CardConfig } from './models/card-config';
import { Card } from './models/card';
import { By } from '@angular/platform-browser';

describe('RunnerNgUiCardComponent', () => {
  let component: RunnerNgUiCardComponent;
  let fixture: ComponentFixture<RunnerNgUiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerNgUiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerNgUiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the supplied card image if an image is provided in the CardConfig', () => {
    const imageName = 'cdpr-logo.png';
    component.cardConfig = new CardConfig({
      card: new Card({
        cardImage: '../../../../src/assets/' + imageName
      })
    });
    fixture.detectChanges();
    const runnerNgCardImageElem = fixture.debugElement.query(By.css('.runner-ng-card-image'));
    expect(runnerNgCardImageElem).toBeTruthy();
    expect(getComputedStyle(runnerNgCardImageElem.nativeElement).backgroundImage).toContain(imageName);
  });

  it('should display the supplied card title if a title is provided in the CardConfig', () => {
    const title = 'Card Title';
    component.cardConfig = new CardConfig({
      card: new Card({
        cardTitle: title
      })
    });
    fixture.detectChanges();
    const cardTitleElem = fixture.debugElement.query(By.css('h4'));
    expect(cardTitleElem).toBeTruthy();
    expect(cardTitleElem.nativeElement.textContent).toBe(title);
  });

  it('should display the supplied card body text if card body text is proved in the CardConfig', () => {
    const bodyText = 'Only 2% of people in the world have red hair.';
    component.cardConfig = new CardConfig({
      card: new Card({
        cardBodyText: bodyText
      })
    });
    fixture.detectChanges();
    const cardBodyTextElem = fixture.debugElement.query(By.css('p'));
    expect(cardBodyTextElem).toBeTruthy();
    expect(cardBodyTextElem.nativeElement.textContent).toBe(bodyText);
  });

});
