import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-most-shared-caselets',
  templateUrl: './most-shared-caselets.component.html'
})
export class MostSharedCaseletsComponent implements OnInit {

  caselets = [];
  dataFetched = false;

  constructor(private caseletService: CaseletService,
    private dataService: DataServiceService) {}

  ngOnInit() {
    this.getMostSharedCaselets();
  }

  getMostSharedCaselets() {
    this.caseletService.getMostSharedCaselet().subscribe((response: any) => {
      this.dataFetched = true;
      response.data.projects.map((project) => {
        this.dataService.getUserName(project.userMid).subscribe((userData) => {
          project.userName = userData.value[0].displayName;
        });
      });
      this.caselets = response.data.projects;
    });
  }
}
