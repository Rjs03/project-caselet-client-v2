import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseletComponent } from './add-caselet.component';

describe('AddCaseletComponent', () => {
  let component: AddCaseletComponent;
  let fixture: ComponentFixture<AddCaseletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaseletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaseletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
