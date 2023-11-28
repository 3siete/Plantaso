import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArticleButtomComponent } from './create-article-buttom.component';

describe('CreateArticleButtomComponent', () => {
  let component: CreateArticleButtomComponent;
  let fixture: ComponentFixture<CreateArticleButtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateArticleButtomComponent]
    });
    fixture = TestBed.createComponent(CreateArticleButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
