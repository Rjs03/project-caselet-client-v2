import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

fdescribe('CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });

  it('testing setData', () => {
    const service: CommonService = TestBed.get(CommonService);
    const searchData = {
      searchValue: ''
    };
    service.setData(searchData);
    expect(service.caseletSubject.value).toBe(searchData);
  });

  it('testing getData', () => {
    const service: CommonService = TestBed.get(CommonService);
    const searchData = {
      searchValue: ''
    };
    let value: any;
    service.setData(searchData);
    service.getData().subscribe((response) => {
      value = response;
    });
    expect(value).toBe(searchData);
  });

  it('testing getDataWithoutObservable', () => {
    const service: CommonService = TestBed.get(CommonService);
    const searchData = {
      searchValue: ''
    };
    let value: any;
    service.setData(searchData);
    value = service.getDataWithoutObservable();
    expect(value).toBe(searchData);
  });
});
