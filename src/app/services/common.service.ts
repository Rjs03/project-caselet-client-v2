import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  caseletSubject = new BehaviorSubject({});

  getData() {
    return this.caseletSubject.asObservable();
  }

  setData(data) {
    this.caseletSubject.next(data);
  }

  getDataWithoutObservable() {
    return this.caseletSubject.value;
  }
}
