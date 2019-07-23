import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-caselet-grid',
  templateUrl: './caselet-grid.component.html'
})
export class CaseletGridComponent implements OnInit {


  constructor(private caseletService: CaseletService) { }

  @Input() caselets = [];

  caselet: any;
  fileBlobUrl: any;
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

  downloadCaselet(caseletId, caseletTitle) {
    this.caseletService.downloadCaselet(caseletId).subscribe((response: any) => {
      const file =  new Blob([response], { type: 'application/pdf' });
      saveAs(file, caseletTitle);
    });
  }
}
