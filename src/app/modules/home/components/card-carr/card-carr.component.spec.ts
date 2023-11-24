import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrComponent } from './card-carr.component';

describe('CardCarrComponent', () => {
  let component: CardCarrComponent;
  let fixture: ComponentFixture<CardCarrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarrComponent]
    });
    fixture = TestBed.createComponent(CardCarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
