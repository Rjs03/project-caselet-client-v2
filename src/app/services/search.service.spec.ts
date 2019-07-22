import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { projectResponse } from 'src/app/samples/projectSample';

fdescribe('SearchService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('testing searchCaseletByTagName', () => {
    const mockData = projectResponse;
      const service: SearchService = TestBed.get(SearchService);
      const searchValue = 'Java';
      const queryString = '?search=' + searchValue;
      service.search(searchValue, 1, 1).subscribe(data => {
        expect(data).toEqual(mockData);
      });
      const req = httpMock.expectOne(environment.serverUrl + environment.caselet + environment.search + queryString);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
      httpMock.verify();
  });
});
