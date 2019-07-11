import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletFilterComponent } from './caselet-filter.component';

describe('CaseletFilterComponent', () => {
  let component: CaseletFilterComponent;
  let fixture: ComponentFixture<CaseletFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
