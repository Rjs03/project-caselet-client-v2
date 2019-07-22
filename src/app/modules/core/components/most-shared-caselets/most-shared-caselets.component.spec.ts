import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSharedCaseletsComponent } from './most-shared-caselets.component';
import { CaseletService } from 'src/app/services/caselet.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError, defer } from 'rxjs';

fdescribe('MostSharedCaseletsComponent', () => {
  let component: MostSharedCaseletsComponent;
  let fixture: ComponentFixture<MostSharedCaseletsComponent>;
  let caseletServiceStub: Partial<CaseletService>;
  let dataServiceStub: Partial<DataServiceService>;

  const mockedData = {
    data: {
        projects: [
            {
                id: 2,
                title: 'Adidas - Analytical Solution to Optimize the Shipment Cost & Streamlining Logistics Process',
                coverImage: 'https://projectcaselets.blob.core.windows.net/project-caselet-images/'
                + 'NaNOptimizing Shipment Cost & Streamlining Logistics Distribution Process.jpg',
                userMid: 'M1040294'
            },
            {
                id: 7,
                title: 'Tanishq\'s Transformational Journey to GST Implementation',
                coverImage: 'https://projectcaselets.blob.core.windows.net/project-caselet-images/NaNgst%20-%20tanishq.html.jpg',
                userMid: 'M1040294'
            },
            {
                id: 6,
                title: 'SKII - Implementation of Responsive Web Design to Elevate Customer Experience',
                coverImage: 'https://projectcaselets.blob.core.windows.net/project-caselet-images/NaNSKII.jpeg',
                userMid: 'M1045464'
            }
        ]
    },
    status: {
        message: 'Most shared projects retrieved!!',
        statusCode: '200'
    }
};

  const mockUser = {
    userData: {
      value: [ {
        displayName: 'R'
      }
      ]
    }
  };

  caseletServiceStub = {
    getMostSharedCaselet: () => {
      return defer(() => Promise.resolve(mockedData));
    }
  };

  dataServiceStub = {
    getUserName: () => {
      return defer(() => Promise.resolve(mockUser));
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostSharedCaseletsComponent ],
      imports : [
        RouterTestingModule
      ],
      providers: [
        { provide: CaseletService, useValue: caseletServiceStub },
        { provide: DataServiceService, useValue: dataServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSharedCaseletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
