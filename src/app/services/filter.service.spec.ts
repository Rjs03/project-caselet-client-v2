import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';


fdescribe('FilterService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: FilterService = TestBed.get(FilterService);
    expect(service).toBeTruthy();
  });

  it('should get filters', () => {
    const mockData = {
      'data': {
          'filters': {
              'verticals': [
                  {
                      'id': 1,
                      'name': 'BFSI'
                  },
                  {
                      'id': 2,
                      'name': 'Enterprise to Employee'
                  }
              ],
              'subVerticals': [
                  {
                      'id': 1,
                      'name': 'Banking'
                  },
                  {
                      'id': 2,
                      'name': 'Capital Markets'
                  },
                  {
                      'id': 4,
                      'name': 'Consumer Packages Goods'
                  },
                  {
                      'id': 3,
                      'name': 'Consumer Technology'
                  }
              ],
              'offerings': [
                  {
                      'id': 1,
                      'name': 'Agile'
                  },
                  {
                      'id': 2,
                      'name': 'Application Development and Support'
                  },
                  {
                      'id': 3,
                      'name': 'Application Managed Services'
                  },
                  {
                      'id': 4,
                      'name': 'Automation'
                  }
              ],
              'practice': [
                  {
                      'id': 1,
                      'name': 'AMS'
                  },
                  {
                      'id': 2,
                      'name': 'CAG'
                  },
                  {
                      'id': 3,
                      'name': 'CTO'
                  },
                  {
                      'id': 5,
                      'name': 'DEL EXLCE & PGM MGT'
                  },
                  {
                      'id': 4,
                      'name': 'Devops'
                  }
              ],
              'subPractices': [
                  {
                      'id': 1,
                      'name': 'Not Applicable',
                      'practiceId': 2,
                      'practice': {
                          'id': 2,
                          'name': 'CAG'
                      }
                  },
                  {
                      'id': 2,
                      'name': 'Not Applicable',
                      'practiceId': 1,
                      'practice': {
                          'id': 1,
                          'name': 'AMS'
                      }
                  },
                  {
                      'id': 3,
                      'name': 'Architecture Group',
                      'practiceId': 2,
                      'practice': {
                          'id': 2,
                          'name': 'CAG'
                      }
                  },
                  {
                      'id': 4,
                      'name': 'Fast Track',
                      'practiceId': 2,
                      'practice': {
                          'id': 2,
                          'name': 'CAG'
                      }
                  },
                  {
                      'id': 5,
                      'name': 'Microsoft',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 6,
                      'name': 'Open Platforms',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 7,
                      'name': 'Not Applicable',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 8,
                      'name': 'CTO_AI',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 9,
                      'name': 'Not Applicable',
                      'practiceId': 5,
                      'practice': {
                          'id': 5,
                          'name': 'DEL EXLCE & PGM MGT'
                      }
                  },
                  {
                      'id': 10,
                      'name': 'Not Applicable',
                      'practiceId': 4,
                      'practice': {
                          'id': 4,
                          'name': 'Devops'
                      }
                  }
              ]
          }
      },
      'status': {
          'message': 'Filters retrieved!!',
          'statusCode': '200'
      }
  };
    const service: FilterService = TestBed.get(FilterService);
    service.getfilters().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.filter);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });

  it('should get tools', () => {
    const mockData = {
      'data': {
          'tools': [
              {
                  'id': 32,
                  'name': 'adventnet'
              },
              {
                  'id': 21,
                  'name': 'akamai'
              },
              {
                  'id': 18,
                  'name': 'android'
              }
          ]
      },
      'status': {
          'message': 'Tools retrieved!!',
          'statusCode': '200'
      }
  };
    const service: FilterService = TestBed.get(FilterService);
    service.getTools().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.filter + environment.tools);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });

  it('should get technologies', () => {
    const mockData = {
      'data': {
          'technologies': [
              {
                  'id': 8,
                  'name': '.net'
              },
              {
                  'id': 9,
                  'name': 'adobe experience manager'
              },
              {
                  'id': 22,
                  'name': 'aem'
              }
          ]
      },
      'status': {
          'message': 'Technologies retrieved!!',
          'statusCode': '200'
      }
  };
    const service: FilterService = TestBed.get(FilterService);
    service.getTechnologies().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.filter + environment.technologies);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });

  it('should get metadata', () => {
    const mockData = {
      'data': {
          'metadata': {
              'contracts': [
                  {
                      'id': 6,
                      'name': 'Fixed Price'
                  },
                  {
                      'id': 2,
                      'name': 'FMC'
                  },
                  {
                      'id': 3,
                      'name': 'FPC'
                  },
                  {
                      'id': 5,
                      'name': 'Not Applicable'
                  },
                  {
                      'id': 4,
                      'name': 'TnM'
                  }
              ],
              'practice': [
                  {
                      'id': 1,
                      'name': 'AMS'
                  },
                  {
                      'id': 2,
                      'name': 'CAG'
                  },
                  {
                      'id': 3,
                      'name': 'CTO'
                  },
                  {
                      'id': 5,
                      'name': 'DEL EXLCE & PGM MGT'
                  },
                  {
                      'id': 4,
                      'name': 'Devops'
                  }
              ],
              'verticals': [
                  {
                      'id': 1,
                      'name': 'BFSI'
                  },
                  {
                      'id': 2,
                      'name': 'Enterprise to Employee'
                  },
                  {
                      'id': 3,
                      'name': 'Hi-Tech & Media'
                  }
              ],
              'offerings': [
                  {
                      'id': 1,
                      'name': 'Agile'
                  },
                  {
                      'id': 2,
                      'name': 'Application Development and Support'
                  },
                  {
                      'id': 3,
                      'name': 'Application Managed Services'
                  }
              ],
              'subPractices': [
                  {
                      'id': 1,
                      'name': 'Not Applicable',
                      'practiceId': 2,
                      'practice': {
                          'id': 2,
                          'name': 'CAG'
                      }
                  },
                  {
                      'id': 2,
                      'name': 'Not Applicable',
                      'practiceId': 1,
                      'practice': {
                          'id': 1,
                          'name': 'AMS'
                      }
                  },
                  {
                      'id': 3,
                      'name': 'Architecture Group',
                      'practiceId': 2,
                      'practice': {
                          'id': 2,
                          'name': 'CAG'
                      }
                  },
                  {
                      'id': 4,
                      'name': 'Fast Track',
                      'practiceId': 2,
                      'practice': {
                          'id': 2,
                          'name': 'CAG'
                      }
                  },
                  {
                      'id': 5,
                      'name': 'Microsoft',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 6,
                      'name': 'Open Platforms',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 7,
                      'name': 'Not Applicable',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 8,
                      'name': 'CTO_AI',
                      'practiceId': 3,
                      'practice': {
                          'id': 3,
                          'name': 'CTO'
                      }
                  },
                  {
                      'id': 9,
                      'name': 'Not Applicable',
                      'practiceId': 5,
                      'practice': {
                          'id': 5,
                          'name': 'DEL EXLCE & PGM MGT'
                      }
                  },
                  {
                      'id': 10,
                      'name': 'Not Applicable',
                      'practiceId': 4,
                      'practice': {
                          'id': 4,
                          'name': 'Devops'
                      }
                  }
              ],
              'subVerticals': [
                  {
                      'id': 1,
                      'name': 'Banking'
                  },
                  {
                      'id': 2,
                      'name': 'Capital Markets'
                  },
                  {
                      'id': 4,
                      'name': 'Consumer Packages Goods'
                  }
              ],
              'technologies': [
                  {
                      'id': 8,
                      'name': '.net'
                  },
                  {
                      'id': 9,
                      'name': 'adobe experience manager'
                  },
                  {
                      'id': 22,
                      'name': 'aem'
                  }
              ],
              'tools': [
                  {
                      'id': 32,
                      'name': 'adventnet'
                  },
                  {
                      'id': 21,
                      'name': 'akamai'
                  },
                  {
                      'id': 18,
                      'name': 'android'
                  }
              ],
              'tag': [
                  {
                      'id': 13,
                      'name': '.net'
                  },
                  {
                      'id': 12,
                      'name': '.net mvc'
                  },
                  {
                      'id': 14,
                      'name': 'adobe experience manager'
                  },
                  {
                      'id': 28,
                      'name': 'aem'
                  }
              ],
              'accounts': [
                  {
                      'id': 1,
                      'name': '7-Eleven'
                  },
                  {
                      'id': 2,
                      'name': 'Aalbert - Flamco'
                  },
                  {
                      'id': 3,
                      'name': 'AAMC'
                  }
              ]
          }
      },
      'status': {
          'message': 'Metadata retrieved!!',
          'statusCode': '200'
      }
  };
    const service: FilterService = TestBed.get(FilterService);
    service.getMetaData().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(environment.serverUrl + environment.metadata);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });
});
