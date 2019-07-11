import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletDetailsComponent } from './caselet-details.component';

describe('CaseletDetailsComponent', () => {
  let component: CaseletDetailsComponent;
  let fixture: ComponentFixture<CaseletDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
