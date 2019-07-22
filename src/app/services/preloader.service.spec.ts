import { TestBed } from '@angular/core/testing';

import { PreloaderService } from './preloader.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { userData } from 'src/app/samples/userDataSample';

fdescribe('PreloaderService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PreloaderService = TestBed.get(PreloaderService);
    expect(service).toBeTruthy();
  });

  it('testing getUserDetails', () => {
    const service: PreloaderService = TestBed.get(PreloaderService);
    service.user = userData;
    expect(service.getUserDetails()).toBe(userData);
  });

  it('testing setUserDetails', () => {
    const service: PreloaderService = TestBed.get(PreloaderService);
    service.setUserDetails(userData);
    expect(service.user).toBe(userData);
  });

  it('testing login', () => {
    const mockData = userData;
    const service: PreloaderService = TestBed.get(PreloaderService);
    service.login().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.login);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });
});
