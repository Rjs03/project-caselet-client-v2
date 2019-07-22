import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-caselet-download',
  templateUrl: './caselet-download.component.html'
})
export class CaseletDownloadComponent implements AfterViewInit {


  @Input() caselet;

  @ViewChild('content') content: ElementRef;

  dataFetched = false;

  constructor(private downloadService: DownloadService) {}


  ngAfterViewInit(): void {
    this.downloadCaseletData();
  }

  downloadCaseletData() {
    const data = 0;
    this.downloadService.downloadPDF(this.content.nativeElement, data, this.caselet.title);
  }
}
