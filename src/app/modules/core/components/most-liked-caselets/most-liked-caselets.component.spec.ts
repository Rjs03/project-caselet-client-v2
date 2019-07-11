import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLikedCaseletsComponent } from './most-liked-caselets.component';

describe('MostLikedCaseletsComponent', () => {
  let component: MostLikedCaseletsComponent;
  let fixture: ComponentFixture<MostLikedCaseletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostLikedCaseletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLikedCaseletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
