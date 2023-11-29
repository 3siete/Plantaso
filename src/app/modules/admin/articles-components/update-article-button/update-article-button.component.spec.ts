import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleButtonComponent } from './update-article-button.component';

describe('UpdateArticleButtonComponent', () => {
  let component: UpdateArticleButtonComponent;
  let fixture: ComponentFixture<UpdateArticleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateArticleButtonComponent]
    });
    fixture = TestBed.createComponent(UpdateArticleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
