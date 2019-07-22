import { Component, OnInit } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SubmittedCaselet } from 'src/app/models/submittedCaselet';
import { AdminService } from 'src/app/services/admin.service';
import { AdminData } from 'src/app/models/adminData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-caselets',
  templateUrl: './pending-caselets.component.html'
})
export class PendingCaseletsComponent implements OnInit {

  caselets;
  noPendingCaselets = true;
  submittedCaselets: SubmittedCaselet[];
  adminNames: AdminData[];

  adminFilters = {
    adminMid: undefined,
    status: undefined,
    fromDate: undefined
  };

  constructor(private caseletService: CaseletService,
    private dataService: DataServiceService,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.getCaselets();
    this.getAdminNames();
  }

  getAdminNames() {
    this.adminService.getAdminNames().subscribe((response: any) => {
      this.adminNames = response.data.admins;
      this.adminNames.map((adminName) => {
        this.dataService.getUserName(adminName.mid).subscribe((responseName: any) => {
          adminName.name = responseName.value[0].displayName;
        });
      });
    });
  }

  getCaselets() {
    this.caseletService.getPendingCaselets(this.adminFilters).subscribe((response: any) => {
      this.submittedCaselets = response.data.projects.caseletHistory;
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

  onAdminNameSelect (value) {
    this.adminFilters.adminMid = value;
    this.getCaselets();
  }

  onStatusSelect (value) {
   const statusValue = value === 'All' ? undefined : value;
   this.adminFilters.status = statusValue;
   this.getCaselets();
  }

  onFromDateChange(value) {
    const fromDate = value === undefined ? undefined : value;
    console.log(fromDate);
    this.adminFilters.fromDate = fromDate;
   this.getCaselets();
  }

  resetFilters () {
    this.adminFilters = {
      adminMid: undefined,
      fromDate: undefined,
      status: undefined
    };
    this.getCaselets();
  }

  caseletNavigate(caseletId, status) {
    if (status === 'Approved') {
      this.router.navigate(['/caselet', caseletId]);
    } else if (status === 'Submitted') {
      this.router.navigate(['/user/admin/approveCaselet', caseletId]);
    }
  }
}
