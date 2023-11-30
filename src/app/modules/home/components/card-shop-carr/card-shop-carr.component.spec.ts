import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShopCarrComponent } from './card-shop-carr.component';

describe('CardShopCarrComponent', () => {
  let component: CardShopCarrComponent;
  let fixture: ComponentFixture<CardShopCarrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardShopCarrComponent]
    });
    fixture = TestBed.createComponent(CardShopCarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
