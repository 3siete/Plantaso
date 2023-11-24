import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrProdComponent } from './card-carr-prod.component';

describe('CardCarrProdComponent', () => {
  let component: CardCarrProdComponent;
  let fixture: ComponentFixture<CardCarrProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarrProdComponent]
    });
    fixture = TestBed.createComponent(CardCarrProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
