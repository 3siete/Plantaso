import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselShopComponent } from './carrusel-shop.component';

describe('CarruselShopComponent', () => {
  let component: CarruselShopComponent;
  let fixture: ComponentFixture<CarruselShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselShopComponent]
    });
    fixture = TestBed.createComponent(CarruselShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
