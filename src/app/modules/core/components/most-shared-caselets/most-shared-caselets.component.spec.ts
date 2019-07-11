import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSharedCaseletsComponent } from './most-shared-caselets.component';

describe('MostSharedCaseletsComponent', () => {
  let component: MostSharedCaseletsComponent;
  let fixture: ComponentFixture<MostSharedCaseletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostSharedCaseletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSharedCaseletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
