import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-caselet',
  templateUrl: './review-caselet.component.html'
})
export class ReviewCaseletComponent implements OnInit {

  @Input() caselet: string;

  constructor() { }

  ngOnInit() {
  }

}
