import { TestBed } from '@angular/core/testing';

import { CaseletService } from './caselet.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

fdescribe('CaseletService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  xit('should be created', () => {
    const service: CaseletService = TestBed.get(CaseletService);
    expect(service).toBeTruthy();
  });

  it('get all caselets should get data', () => {
    const mockData = {
      data: {
          projects: [
              {
                  'id': 2,
                  'title': 'Adidas - Analytical Solution to Optimize the Shipment Cost & Streamlining Logistics Process',
                  'domain': null,
                  'coverImage': 'https://projectcaselets.blob.core.windows.net/project-caselet-image'
                  + 's/NaNOptimizing Shipment Cost & Streamlining Logistics Distribution Process.jpg',
                  'engineering': null,
                  'viewCount': 204,
                  'like': 3,
                  'share': 14,
                  'download': 0,
                  'userMid': 'M1040294',
                  'subPracticeId': 54,
                  'technologies': [
                      {
                          'id': 2,
                          'name': 'sap bw/hana',
                          'project_technology': {
                              'ProjectCaseletId': 2,
                              'technologyId': 2
                          }
                      },
                      {
                          'id': 3,
                          'name': 'mstr',
                          'project_technology': {
                              'ProjectCaseletId': 2,
                              'technologyId': 3
                          }
                      }
                  ],
                  'tools': [],
                  'offering': {
                      'id': 13,
                      'name': 'Package Implementation'
                  },
                  'tags': [
                      {
                          'id': 2,
                          'name': 'mstr',
                          'project_tag': {
                              'ProjectCaseletId': 2,
                              'tagId': 2
                          }
                      },
                      {
                          'id': 7,
                          'name': 'sap bw/hana',
                          'project_tag': {
                              'ProjectCaseletId': 2,
                              'tagId': 7
                          }
                      }
                  ],
                  'sub_vertical': {
                      'id': 4,
                      'name': 'Consumer Packages Goods'
                  },
                  'sub_practice': {
                      'id': 54,
                      'name': 'Not Applicable',
                      'practiceId': 15
                  },
                  'account': {
                      'id': 11,
                      'name': 'Adidas'
                  },
                  'vertical': {
                      'id': 5,
                      'name': 'RCM'
                  },
                  'practice': {
                      'id': 15,
                      'name': 'Not Applicable'
                  },
                  'contract': {
                      'id': 3,
                      'name': 'FPC'
                  },
                  'customer': {
                      'id': 2,
                      'name': 'Adidas AG'
                  },
                  'likes': [
                      {
                          'mid': 'M1046945',
                          'role': 'admin',
                          'project_likes': {
                              'createdAt': '2019-06-17T08:19:06.124Z',
                              'updatedAt': '2019-06-17T08:19:06.124Z',
                              'projectCaseletId': 2,
                              'userMid': 'M1046945'
                          }
                      }
                  ],
                  'liked': true
              },
              {
                  'id': 5,
                  'title': 'Toyota’s Integration of Financial Budgeting & Planning Process with SAP',
                  'domain': 'Finance (Budgeting and Planning)',
                  'coverImage': 'https://projectcaselets.blob.core.windows.net/project-caselet-images/NaNtoyota.jpeg',
                  'engineering': null,
                  'viewCount': 139,
                  'like': 1,
                  'share': 0,
                  'download': 0,
                  'userMid': 'M1045464',
                  'subPracticeId': 63,
                  'technologies': [
                      {
                          'id': 4,
                          'name': 'sap bpc 11 standard',
                          'project_technology': {
                              'ProjectCaseletId': 5,
                              'technologyId': 4
                          }
                      },
                      {
                          'id': 5,
                          'name': 'sap bw/4hana',
                          'project_technology': {
                              'ProjectCaseletId': 5,
                              'technologyId': 5
                          }
                      }
                  ],
                  'tools': [],
                  'offering': {
                      'id': 2,
                      'name': 'Application Development and Support'
                  },
                  'tags': [
                      {
                          'id': 8,
                          'name': 'sap hana',
                          'project_tag': {
                              'ProjectCaseletId': 5,
                              'tagId': 8
                          }
                      },
                      {
                          'id': 9,
                          'name': 'erp',
                          'project_tag': {
                              'ProjectCaseletId': 5,
                              'tagId': 9
                          }
                      }
                  ],
                  'sub_vertical': {
                      'id': 8,
                      'name': 'Manufacturing'
                  },
                  'sub_practice': {
                      'id': 63,
                      'name': 'SAP HANA',
                      'practiceId': 16
                  },
                  'account': {
                      'id': 261,
                      'name': 'TOYOTA MOTOR'
                  },
                  'vertical': {
                      'id': 5,
                      'name': 'RCM'
                  },
                  'practice': {
                      'id': 16,
                      'name': 'PACKAGE SOLUTIONS'
                  },
                  'contract': {
                      'id': 2,
                      'name': 'FMC'
                  },
                  'customer': {
                      'id': 5,
                      'name': 'Toyota Motor North America, Inc.'
                  },
                  'likes': [
                      {
                          'mid': 'M1046945',
                          'role': 'admin',
                          'project_likes': {
                              'createdAt': '2019-05-27T09:05:08.950Z',
                              'updatedAt': '2019-05-27T09:05:08.950Z',
                              'projectCaseletId': 5,
                              'userMid': 'M1046945'
                          }
                      }
                  ],
                  'liked': true
              },
              {
                  'id': 6,
                  'title': 'SKII - Implementation of Responsive Web Design to Elevate Customer Experience',
                  'domain': 'Digital Marketing',
                  'coverImage': 'https://projectcaselets.blob.core.windows.net/project-caselet-images/NaNSKII.jpeg',
                  'engineering': 'CICD, JENKINS, OCTOPUS',
                  'viewCount': 94,
                  'like': 2,
                  'share': 0,
                  'download': 0,
                  'userMid': 'M1045464',
                  'subPracticeId': 17,
                  'technologies': [
                      {
                          'id': 6,
                          'name': 'sitecore',
                          'project_technology': {
                              'ProjectCaseletId': 6,
                              'technologyId': 6
                          }
                      },
                      {
                          'id': 7,
                          'name': 'bootstrap framework',
                          'project_technology': {
                              'ProjectCaseletId': 6,
                              'technologyId': 7
                          }
                      },
                      {
                          'id': 8,
                          'name': '.net',
                          'project_technology': {
                              'ProjectCaseletId': 6,
                              'technologyId': 8
                          }
                      }
                  ],
                  'tools': [
                      {
                          'id': 1,
                          'name': 'visual studio 2017',
                          'project_tool': {
                              'ProjectCaseletId': 6,
                              'toolId': 1
                          }
                      },
                      {
                          'id': 2,
                          'name': 'team development for sitecore',
                          'project_tool': {
                              'ProjectCaseletId': 6,
                              'toolId': 2
                          }
                      },
                      {
                          'id': 3,
                          'name': 'bitbucket',
                          'project_tool': {
                              'ProjectCaseletId': 6,
                              'toolId': 3
                          }
                      }
                  ],
                  'offering': {
                      'id': 2,
                      'name': 'Application Development and Support'
                  },
                  'tags': [
                      {
                          'id': 10,
                          'name': 'sitecore',
                          'project_tag': {
                              'ProjectCaseletId': 6,
                              'tagId': 10
                          }
                      },
                      {
                          'id': 11,
                          'name': 'bootstrap framework',
                          'project_tag': {
                              'ProjectCaseletId': 6,
                              'tagId': 11
                          }
                      },
                      {
                          'id': 12,
                          'name': '.net mvc',
                          'project_tag': {
                              'ProjectCaseletId': 6,
                              'tagId': 12
                          }
                      }
                  ],
                  'sub_vertical': {
                      'id': 4,
                      'name': 'Consumer Packages Goods'
                  },
                  'sub_practice': {
                      'id': 17,
                      'name': 'Digital Marketing',
                      'practiceId': 6
                  },
                  'account': {
                      'id': 209,
                      'name': 'Procter & Gamble'
                  },
                  'vertical': {
                      'id': 5,
                      'name': 'RCM'
                  },
                  'practice': {
                      'id': 6,
                      'name': 'DIGITAL'
                  },
                  'contract': {
                      'id': 3,
                      'name': 'FPC'
                  },
                  'customer': {
                      'id': 4,
                      'name': 'Procter & Gamble'
                  },
                  'likes': [
                      {
                          'mid': 'M1046945',
                          'role': 'admin',
                          'project_likes': {
                              'createdAt': '2019-05-27T10:28:51.227Z',
                              'updatedAt': '2019-05-27T10:28:51.227Z',
                              'projectCaseletId': 6,
                              'userMid': 'M1046945'
                          }
                      }
                  ],
                  'liked': true
              }
          ]
      },
      status: {
          'message': 'Project retrieved!!',
          'statusCode': '200'
      }
  };
  const pageNo = 1;
  const limit = 3;
  const service: CaseletService = TestBed.get(CaseletService);
  service.getCaselets(pageNo, limit).subscribe((data: any) => {
    expect(data).toEqual(mockData);
    expect(data.projects).not.toBeNull();
    });
  const req = httpMock.expectOne(environment.serverUrl + environment.caselet + '?pageNo=' + pageNo + '&limit=' + limit);
  expect(req.request.method).toBe('GET');
  req.flush(mockData);
  httpMock.verify();
  });

  it('get all pending caselet history', () => {
    const mockData = {
      'data': {
          'projects': {
              'caseletCount': 31,
              'caseletHistory': [
                  {
                      'id': 3,
                      'caseletId': 2,
                      'status': 'Approved',
                      'authorMid': 'M1040294',
                      'adminMid': 'M1040294',
                      'adminComment': null,
                      'sendBackTime': null,
                      'submittedTime': '2019-05-22T10:56:41.289Z',
                      'approvedTime': '2019-05-22T10:57:22.323Z',
                      'title': 'Adidas - Analytical Solution to Optimize the Shipment Cost & Streamlining Logistics Process'
                  },
                  {
                      'id': 4,
                      'caseletId': 5,
                      'status': 'Approved',
                      'authorMid': 'M1045464',
                      'adminMid': 'M1045464',
                      'adminComment': null,
                      'sendBackTime': null,
                      'submittedTime': '2019-05-22T12:56:26.914Z',
                      'approvedTime': '2019-05-22T12:57:55.057Z',
                      'title': 'Toyota’s Integration of Financial Budgeting & Planning Process with SAP'
                  }
              ]
          }
      },
      'status': {
          'message': 'Project retrieved!!',
          'statusCode': '200'
      }
  };
  const options = {};
  const finalString = '';
  const service: CaseletService = TestBed.get(CaseletService);
  service.getPendingCaselets(options).subscribe((data: any) => {
    expect(data).toEqual(mockData);
    expect(data.projects).not.toBeNull();
    });
  const req = httpMock.expectOne(environment.serverUrl + environment.admin  + finalString);
  expect(req.request.method).toBe('GET');
  req.flush(mockData);
  httpMock.verify();
  });

  it('get all pending caselet history with admin mid', () => {
    const mockData = {
      'data': {
          'projects': {
              'caseletCount': 31,
              'caseletHistory': [
                  {
                      'id': 3,
                      'caseletId': 2,
                      'status': 'Approved',
                      'authorMid': 'M1040294',
                      'adminMid': 'M1040294',
                      'adminComment': null,
                      'sendBackTime': null,
                      'submittedTime': '2019-05-22T10:56:41.289Z',
                      'approvedTime': '2019-05-22T10:57:22.323Z',
                      'title': 'Adidas - Analytical Solution to Optimize the Shipment Cost & Streamlining Logistics Process'
                  }
              ]
          }
      },
      'status': {
          'message': 'Project retrieved!!',
          'statusCode': '200'
      }
  };
  const options = {
    adminMid: 'M1040294',
    status: '',
    fromDate: ''
  };
  const service: CaseletService = TestBed.get(CaseletService);
  service.getPendingCaselets(options).subscribe((data: any) => {
    expect(data).toEqual(mockData);
    expect(data.projects).not.toBeNull();
    });
    const adminMidString = options.adminMid ? 'adminMid=' + options.adminMid + '&' : '';
    const statusString = options.status ? 'status=' + options.status + '&' : '';
    const fromDateString = options.fromDate ? 'fromDate=' + options.fromDate : '';
    const queryString = adminMidString + statusString + fromDateString;
    const finalString = queryString.length > 0 ? '?' + queryString : queryString;
  const req = httpMock.expectOne(environment.serverUrl + environment.admin  + finalString);
  expect(req.request.method).toBe('GET');
  req.flush(mockData);
  httpMock.verify();
  });

  it('get all pending caselet history with status', () => {
    const mockData = {
      'data': {
          'projects': {
              'caseletCount': 31,
              'caseletHistory': [
                  {
                      'id': 3,
                      'caseletId': 2,
                      'status': 'Approved',
                      'authorMid': 'M1040294',
                      'adminMid': 'M1040294',
                      'adminComment': null,
                      'sendBackTime': null,
                      'submittedTime': '2019-05-22T10:56:41.289Z',
                      'approvedTime': '2019-05-22T10:57:22.323Z',
                      'title': 'Adidas - Analytical Solution to Optimize the Shipment Cost & Streamlining Logistics Process'
                  }
              ]
          }
      },
      'status': {
          'message': 'Project retrieved!!',
          'statusCode': '200'
      }
  };
  const options = {
    adminMid: '',
    status: 'Approved',
    fromDate: ''
  };
  const service: CaseletService = TestBed.get(CaseletService);
  service.getPendingCaselets(options).subscribe((data: any) => {
    expect(data).toEqual(mockData);
    expect(data.projects).not.toBeNull();
    });
    const adminMidString = options.adminMid ? 'adminMid=' + options.adminMid + '&' : '';
    const statusString = options.status ? 'status=' + options.status + '&' : '';
    const fromDateString = options.fromDate ? 'fromDate=' + options.fromDate : '';
    const queryString = adminMidString + statusString + fromDateString;
    const finalString = queryString.length > 0 ? '?' + queryString : queryString;
  const req = httpMock.expectOne(environment.serverUrl + environment.admin  + finalString);
  expect(req.request.method).toBe('GET');
  req.flush(mockData);
  httpMock.verify();
  });

  it('get all pending caselet history with from date', () => {
    const mockData = {
      'data': {
          'projects': {
              'caseletCount': 1,
              'caseletHistory': [
                  {
                      'id': 3,
                      'caseletId': 2,
                      'status': 'Approved',
                      'authorMid': 'M1040294',
                      'adminMid': 'M1040294',
                      'adminComment': null,
                      'sendBackTime': null,
                      'submittedTime': '2019-05-22T10:56:41.289Z',
                      'approvedTime': '2019-05-22T10:57:22.323Z',
                      'title': 'Adidas - Analytical Solution to Optimize the Shipment Cost & Streamlining Logistics Process'
                  }
              ]
          }
      },
      'status': {
          'message': 'Project retrieved!!',
          'statusCode': '200'
      }
  };
  const options = {
    adminMid: '',
    status: 'Approved',
    fromDate: '2019-07-11'
  };
  const service: CaseletService = TestBed.get(CaseletService);
  service.getPendingCaselets(options).subscribe((data: any) => {
    expect(data).toEqual(mockData);
    expect(data.projects).not.toBeNull();
    });
    const adminMidString = options.adminMid ? 'adminMid=' + options.adminMid + '&' : '';
    const statusString = options.status ? 'status=' + options.status + '&' : '';
    const fromDateString = options.fromDate ? 'fromDate=' + options.fromDate : '';
    const queryString = adminMidString + statusString + fromDateString;
    const finalString = queryString.length > 0 ? '?' + queryString : queryString;
  const req = httpMock.expectOne(environment.serverUrl + environment.admin  + finalString);
  expect(req.request.method).toBe('GET');
  req.flush(mockData);
  httpMock.verify();
  });
});
