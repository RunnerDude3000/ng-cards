import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerNgUiCardComponent } from './runner-ng-ui-card.component';
import { CardConfig } from './models/card-config';
import { Card } from './models/card';
import { By } from '@angular/platform-browser';
import { CardButton } from './models/card-button';

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

  it('should create the runner-ng-ui-card component', () => {
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

  it('should display the supplied card button if a card button is defined in the CardConfig', () => {
    const buttonText = 'Card Button';
    const buttonColor = 'rgb(47, 47, 47)';
    const buttonTextColor = 'rgb(255, 255, 255)';
    component.cardConfig = new CardConfig({
      card: new Card({
        cardButton: new CardButton({
          cardButtonText: buttonText,
          cardButtonColor: buttonColor,
          cardButtonTextColor: buttonTextColor,
          cardButtonCallback: () => {
            console.log('button clicked');
          }
        })
      })
    });
    fixture.detectChanges();
    const runnerNgCardButtonElem = fixture.debugElement.query(By.css('.runner-ng-card-button'));
    expect(runnerNgCardButtonElem).toBeTruthy();
    expect(getComputedStyle(runnerNgCardButtonElem.nativeElement).backgroundColor).toContain(buttonColor);
    expect(getComputedStyle(runnerNgCardButtonElem.nativeElement).color).toContain(buttonTextColor);
    expect(runnerNgCardButtonElem.nativeElement.textContent).toBe(buttonText);
  });

  it('should call the button callback attached to the CardButton when the button is clicked', async(() => {
    component.cardConfig = new CardConfig({
      card: new Card({
        cardButton: new CardButton({
          cardButtonCallback: () => {
            console.log('button clicked');
          }
        })
      })
    });
    spyOn(component.cardConfig.card.cardButton, 'cardButtonCallback');
    fixture.detectChanges();
    const runnerNgCardButtonElem = fixture.debugElement.query(By.css('.runner-ng-card-button'));
    expect(runnerNgCardButtonElem).toBeTruthy();
    runnerNgCardButtonElem.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(component.cardConfig.card.cardButton.cardButtonCallback).toHaveBeenCalled();
    });
  }));
});
