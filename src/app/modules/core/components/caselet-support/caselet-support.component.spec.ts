import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletSupportComponent } from './caselet-support.component';

describe('CaseletSupportComponent', () => {
  let component: CaseletSupportComponent;
  let fixture: ComponentFixture<CaseletSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
