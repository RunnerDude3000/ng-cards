import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerNgUiCardComponent } from './runner-ng-ui-card.component';

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
});
