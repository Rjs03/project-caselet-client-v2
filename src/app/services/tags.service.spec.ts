import { TestBed } from '@angular/core/testing';

import { TagsService } from './tags.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { projectResponse } from 'src/app/samples/projectSample';

fdescribe('TagsService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service).toBeTruthy();
  });

  it('testing getTags', () => {
    const mockData = {
      data: {
          tags: [
            {
              id: 1,
              name: 'Java',
              count: 4
            },
            {
              id: 2,
              name: '.net',
              count: 3
            },
          ]
      },
      status: {
          message: 'List of tags retrieved',
          statusCode: 200
      }
    };
    const service: TagsService = TestBed.get(TagsService);
    service.getTags().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.tags);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });

  it('testing searchCaseletByTagName', () => {
    const mockData = projectResponse;
      const service: TagsService = TestBed.get(TagsService);
      const tagName = 'mstr';
      const queryParameter = '?filter=tags_name eq \'' + tagName + '\'';
      service.searchCaseletByTag(tagName).subscribe(data => {
        expect(data).toEqual(mockData);
      });
      const req = httpMock.expectOne(environment.serverUrl + environment.caselet + environment.search + queryParameter);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
      httpMock.verify();
  });
});
