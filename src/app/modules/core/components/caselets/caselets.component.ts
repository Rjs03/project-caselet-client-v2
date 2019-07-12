import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { CommonService } from 'src/app/services/common.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-caselets',
  templateUrl: './caselets.component.html'
})
export class CaseletsComponent implements OnInit {

  constructor(private caseletService: CaseletService,
    private commonService: CommonService,
    private dataService: DataServiceService) { }

  showList = false;
  dataFetched = false;
  searched = false;
  caselets = [];
  pageNo: number;
  limit = 12;

  caseletsToAdd = [];

  ngOnInit() {
    this.pageNo = 1;
    this.getCaselets();
    this.getDataFromCommonService();
  }

  toggleList() {
    this.showList = !this.showList;
  }

  getCaselets() {
    this.caseletService.getCaselets(this.pageNo, this.limit).subscribe((response: any) => {
      response.data.projects.map((project) => {
        this.dataService.getUserName(project.userMid).subscribe((responseName: any) => {
          project.userName = responseName.value[0].displayName;
        });
      });
      this.caseletsToAdd.push(...response.data.projects);
      const caseletData = {
        searchValue: '',
        caselets: this.caseletsToAdd
      };
      this.commonService.setData(caseletData);
      this.dataFetched = true;
      this.pageNo++;
    }, (error: any) => {
      alert(error.error.status.message);
    });
  }

  getDataFromCommonService() {
    this.commonService.getData().subscribe((response: any) => {
      this.caselets = response.caselets;
    });
  }

  refreshCaselets() {
    this.getCaselets();
  }

  onScroll() {
    const response: any = this.commonService.getDataWithoutObservable();
     if ( ! response.searchValue ) {
      this.getCaselets();
     }
  }
}
