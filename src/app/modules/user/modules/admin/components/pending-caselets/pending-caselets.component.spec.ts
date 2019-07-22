import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCaseletsComponent } from './pending-caselets.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('PendingCaseletsComponent', () => {
  let component: PendingCaseletsComponent;
  let fixture: ComponentFixture<PendingCaseletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCaseletsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
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

  it('should check onAdminSelect', () => {
    component.onAdminNameSelect('M1046945');
    expect(component.adminFilters.adminMid).toBe('M1046945');
  });

  it('should check onStatusSelect if all', () => {
    component.onStatusSelect('All');
    expect(component.adminFilters.status).toBe(undefined);
  });

  it('should check onStatusSelect if status is there', () => {
    component.onStatusSelect('Approved');
    expect(component.adminFilters.status).toBe('Approved');
  });
});
