import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-caselet-download',
  templateUrl: './caselet-download.component.html'
})
export class CaseletDownloadComponent implements OnInit {

  @Input() caselet;

  @ViewChild('content') content: ElementRef;

  dataFetched = false;
  // caselet: any;

  constructor(private commonService: CommonService,
    private downloadService: DownloadService
    ) {}

  ngOnInit() {
    // this.downloadCaseletData();
  }

  // downloadCaseletData() {
  //   this.commonService.getDownloadCaseletSubject().subscribe((response: any) => {
  //     this.dataFetched = response.dataFetched;
  //     this.caselet = response.caselet;
  //     if (this.caselet !== undefined) {
  //       this.downloadService.downloadPDF(this.content, response.caselet.title);
  //     }
  //   });
  // }
}
