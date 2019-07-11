import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseletComponent } from './edit-caselet.component';

describe('EditCaseletComponent', () => {
  let component: EditCaseletComponent;
  let fixture: ComponentFixture<EditCaseletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCaseletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaseletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
