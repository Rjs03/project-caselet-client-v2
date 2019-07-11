import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { CaseletService } from 'src/app/services/caselet.service';
import { async } from 'q';
import { forkJoin } from 'rxjs';

export interface AutoCompleteModel {
  value: any;
  display: string;
}

@Component({
  selector: 'app-caselet-share',
  templateUrl: './caselet-share.component.html'
})

export class CaseletShareComponent implements OnInit {

  @Input() sharedCaseletInfo = {
    sharedCaseletTitle: '',
    sharedCaseletId: null
  };

  people: any;
  expName: any;
  peopleName = new Set();
  peopleArray = [];
  finalValues: any;
  message: String;

  constructor(private dataService: DataServiceService,
    private caseletService: CaseletService) { }

  ngOnInit() {
  }

  onShareCaselet() {
    const toSendPeopleMid = this.finalValues.map((toSend) => {
      return (toSend.slice(-9).substr(0, 8));
    });
    const toPeopleMail = [];
    const httpCalls  = toSendPeopleMid.map((person) => {
      return this.dataService.getUserName(person);
      });
      forkJoin(httpCalls).subscribe((response: any) => {
        response.map((userResponse: any) => {
          toPeopleMail.push({
            name: userResponse.value[0].givenName,
            email: userResponse.value[0].mail
          });
        });
        const shareCaseletData = {
          to: toPeopleMail,
          message: this.message,
          title: this.sharedCaseletInfo.sharedCaseletTitle,
          link: 'https://localhost:4200/caselet/' + this.sharedCaseletInfo.sharedCaseletId
        };
        console.log('working', shareCaseletData.to);
        console.log(new Date().getMilliseconds());
        this.caseletService.shareCaselet(shareCaseletData, this.sharedCaseletInfo.sharedCaseletId).subscribe(() => {
          this.clearData();
        });
      });

  }

  getData(value) {
    this.dataService.getUserData(value).subscribe((response: any) => {
      this.people = response.value;
      this.peopleName.clear();
      this.people.map((person) => {
        const name = person.displayName + ' (' + (person.userPrincipalName).substring(0, 8) + ')';
        this.peopleName.add(name);
      });
      this.peopleArray = Array.from(this.peopleName);
    });
  }

  clearData() {
    this.finalValues = [];
    this.message = '';
  }

  expertsFunctionCall(value) {
    if (value) {
      this.getData(value);
    }
  }

}
