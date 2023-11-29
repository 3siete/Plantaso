import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArticleButtonComponent } from './delete-article-button.component';

describe('DeleteArticleButtonComponent', () => {
  let component: DeleteArticleButtonComponent;
  let fixture: ComponentFixture<DeleteArticleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteArticleButtonComponent]
    });
    fixture = TestBed.createComponent(DeleteArticleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
