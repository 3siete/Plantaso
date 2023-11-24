import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProdComponent } from './carousel-prod.component';

describe('CarouselProdComponent', () => {
  let component: CarouselProdComponent;
  let fixture: ComponentFixture<CarouselProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselProdComponent]
    });
    fixture = TestBed.createComponent(CarouselProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
