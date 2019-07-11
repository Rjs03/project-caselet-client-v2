import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletShareComponent } from './caselet-share.component';

describe('CaseletShareComponent', () => {
  let component: CaseletShareComponent;
  let fixture: ComponentFixture<CaseletShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
