import { Component, OnInit, Input } from '@angular/core';
import { CaseletService } from 'src/app/services/caselet.service';

@Component({
  selector: 'app-caselet-list',
  templateUrl: './caselet-list.component.html'
})
export class CaseletListComponent implements OnInit {

  @Input() caselets =  [];

  constructor(private caseletService: CaseletService) { }

  ngOnInit() {

  }

  // likeCaselet(caseletId, i) {
  //   console.log(caseletId, i);
  //   this.caseletService.likeCaselet(caseletId).subscribe((response: any) => {
  //     this.caselets[i].liked = !this.caselets[i].liked;
  //   });
  // }

}
