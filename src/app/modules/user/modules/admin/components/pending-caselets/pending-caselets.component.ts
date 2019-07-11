import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-pending-caselets',
  templateUrl: './pending-caselets.component.html'
})
export class PendingCaseletsComponent implements OnInit {

  caselets;
  noPendingCaselets = true;

  constructor(private caseletService: CaseletService,
    private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCaselets();
  }

  getCaselets() {
    this.caseletService.getPendingCaselets().subscribe((response: any) => {
      response.data.projects.map((project) => {
        this.dataService.getUserName(project.user.mid).subscribe((responseName: any) => {
          project.user.name = responseName.value[0].displayName;
        });
      });
      this.caselets = response.data.projects;
      this.noPendingCaselets = (this.caselets.length === 0) ? true : false;
    });
  }


}
