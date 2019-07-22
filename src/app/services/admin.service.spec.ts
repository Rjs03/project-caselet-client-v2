import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('AdminService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });

  it('should get admin names', () => {
    const mockData = {
      data: {
          admins: [
              {
                  mid: 'M1000238'
              },
              {
                  mid: 'M1008613'
              }
          ]
      },
      status: {
          message: 'List of admins retrieved',
          statusCode: 200
      }
    };
    const service: AdminService = TestBed.get(AdminService);
    const options = {};
    service.getAdminNames().subscribe(data => {
      // expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.admin + environment.list);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });

});
