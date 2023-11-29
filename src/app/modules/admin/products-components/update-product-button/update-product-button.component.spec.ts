import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductButtonComponent } from './update-product-button.component';

describe('UpdateProductButtonComponent', () => {
  let component: UpdateProductButtonComponent;
  let fixture: ComponentFixture<UpdateProductButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductButtonComponent]
    });
    fixture = TestBed.createComponent(UpdateProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
