import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { DownloadService } from 'src/app/services/download.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-caselet-grid',
  templateUrl: './caselet-grid.component.html'
})
export class CaseletGridComponent implements OnInit {


  constructor(private caseletService: CaseletService,
    private commonService: CommonService) { }

  @Input() caselets = [];

  caselet: any;
  sharedCaseletInfo = {
    sharedCaseletId: null,
    sharedCaseletTitle: ''
  };

  solutionFetched = false;


  ngOnInit() {
  }

  likeCaselet(caseletId, i) {
    this.caseletService.likeCaselet(caseletId).subscribe((response: any) => {
      this.caselets[i].liked = !this.caselets[i].liked;
    });
  }

  shareCaselet(caseletId, caseletTitle) {
    this.sharedCaseletInfo.sharedCaseletId = caseletId;
    this.sharedCaseletInfo.sharedCaseletTitle = caseletTitle;
  }

  downloadCaselet(caseletId) {
    this.solutionFetched = false;
    this.caseletService.getCaseletById(caseletId).subscribe((response: any) => {
      this.caselet = response.data.project;
      this.solutionFetched = true;
    });
  }
}
