import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SubmittedCaselet } from 'src/app/models/submittedCaselet';

@Component({
  selector: 'app-pending-caselets',
  templateUrl: './pending-caselets.component.html'
})
export class PendingCaseletsComponent implements OnInit {

  caselets;
  noPendingCaselets = true;
  submittedCaselets: SubmittedCaselet[];

  constructor(private caseletService: CaseletService,
    private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCaselets();
  }

  getCaselets() {
    this.caseletService.getPendingCaselets().subscribe((response: any) => {
      this.submittedCaselets = response.data.projects;
      this.submittedCaselets.map((submittedCaselet) => {
        this.dataService.getUserName(submittedCaselet.adminMid).subscribe((responseName: any) => {
          submittedCaselet.adminName = responseName.value[0].displayName;
        });
        this.dataService.getUserName(submittedCaselet.authorMid).subscribe((responseName: any) => {
          submittedCaselet.authorName = responseName.value[0].displayName;
        });
      });
      this.noPendingCaselets = (this.submittedCaselets.length === 0) ? true : false;
    });
  }

  displayId(event: Event) {
    const elementId = (event.target as Element);
    console.log('Hi ', elementId);
  }
}
