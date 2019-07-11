import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletListComponent } from './caselet-list.component';

describe('CaseletListComponent', () => {
  let component: CaseletListComponent;
  let fixture: ComponentFixture<CaseletListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
