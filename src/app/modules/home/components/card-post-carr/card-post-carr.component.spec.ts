import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostCarrComponent } from './card-post-carr.component';

describe('CardPostCarrComponent', () => {
  let component: CardPostCarrComponent;
  let fixture: ComponentFixture<CardPostCarrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPostCarrComponent]
    });
    fixture = TestBed.createComponent(CardPostCarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
