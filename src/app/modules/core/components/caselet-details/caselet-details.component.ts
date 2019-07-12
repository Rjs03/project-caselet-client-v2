import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-caselet-details',
  templateUrl: './caselet-details.component.html'
})
export class CaseletDetailsComponent implements OnInit {

  caselet: any;
  caseletId: any;
  dataFetched = false;
  activeValue = false;

  constructor(private caseletService: CaseletService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.caseletId = params['caseletId'];
      this.caseletService.getCaseletById(this.caseletId).subscribe((response: any) => {
        this.dataService.getUserName(response.data.project.userMid).subscribe((responseName: any) => {
          response.data.project.userName = responseName.value[0].displayName;
        });
        this.caselet = response.data.project;
        this.dataFetched = true;
      }, (error: any) => {
        console.log(error);
      });
    });
  }

  scroll(element) {
    this.activeValue = true;
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}
