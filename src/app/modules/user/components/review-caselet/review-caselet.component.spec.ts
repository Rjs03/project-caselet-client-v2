import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCaseletComponent } from './review-caselet.component';

describe('ReviewCaseletComponent', () => {
  let component: ReviewCaseletComponent;
  let fixture: ComponentFixture<ReviewCaseletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCaseletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCaseletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
