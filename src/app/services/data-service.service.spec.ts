import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { componentFactoryName } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

fdescribe('DataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: DataServiceService = TestBed.get(DataServiceService);
    expect(service).toBeTruthy();
  });

  it('should check getUserData', () => {
    const mockData = {};
    const value = 'M1046945';
    const service: DataServiceService = TestBed.get(DataServiceService);
    service.getUserData(value).subscribe((data: any) => {
      expect(data).toEqual(mockData);
      });
  });

  it('should check getUserName', () => {
    const mockData = {};
    const value = 'M1046945';
    const service: DataServiceService = TestBed.get(DataServiceService);
    service.getUserName(value).subscribe((data: any) => {
      expect(data).toEqual(mockData);
      });
  });

  it('should check getUserImage', () => {
    const mockData = {};
    const value = 'M1046945';
    const service: DataServiceService = TestBed.get(DataServiceService);
    service.getUserImage(value).subscribe((data: any) => {
      expect(data).toEqual(mockData);
      });
  });
});
