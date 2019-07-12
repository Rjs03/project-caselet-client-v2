import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-most-liked-caselets',
  templateUrl: './most-liked-caselets.component.html'
})
export class MostLikedCaseletsComponent implements OnInit {

  caselets = [];
  dataFetched = false;

  constructor(private caseletService: CaseletService,
    private dataService: DataServiceService) { }

  ngOnInit() {
    this.getMostLikedCaselets();
  }

  getMostLikedCaselets() {
    this.caseletService.getMostLikedCaselet().subscribe((response: any) => {
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
