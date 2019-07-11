import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletsComponent } from './caselets.component';

describe('CaseletsComponent', () => {
  let component: CaseletsComponent;
  let fixture: ComponentFixture<CaseletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
