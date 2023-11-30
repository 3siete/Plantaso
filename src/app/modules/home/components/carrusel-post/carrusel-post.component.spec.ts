import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPostComponent } from './carrusel-post.component';

describe('CarruselPostComponent', () => {
  let component: CarruselPostComponent;
  let fixture: ComponentFixture<CarruselPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselPostComponent]
    });
    fixture = TestBed.createComponent(CarruselPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
