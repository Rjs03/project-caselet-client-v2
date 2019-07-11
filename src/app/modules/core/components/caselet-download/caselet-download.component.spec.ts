import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseletDownloadComponent } from './caselet-download.component';

describe('CaseletDownloadComponent', () => {
  let component: CaseletDownloadComponent;
  let fixture: ComponentFixture<CaseletDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseletDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseletDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
