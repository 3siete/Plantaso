import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostComponent } from './card-post.component';

describe('CardPostComponent', () => {
  let component: CardPostComponent;
  let fixture: ComponentFixture<CardPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPostComponent]
    });
    fixture = TestBed.createComponent(CardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
