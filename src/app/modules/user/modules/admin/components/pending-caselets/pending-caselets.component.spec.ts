import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCaseletsComponent } from './pending-caselets.component';

describe('PendingCaseletsComponent', () => {
  let component: PendingCaseletsComponent;
  let fixture: ComponentFixture<PendingCaseletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCaseletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCaseletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
