import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletGridComponent } from './caselet-grid.component';

describe('CaseletGridComponent', () => {
  let component: CaseletGridComponent;
  let fixture: ComponentFixture<CaseletGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
