import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  caseletSubject = new BehaviorSubject({});

  downloadCaseletSubject = new BehaviorSubject({});

  getData() {
    return this.caseletSubject.asObservable();
  }

  setData(data) {
    this.caseletSubject.next(data);
  }

  getDataWithoutObservable() {
    return this.caseletSubject.value;
  }

  getDownloadCaseletSubject() {
    return this.downloadCaseletSubject.asObservable();
  }

  setDownloadData(caseletData) {
    this.downloadCaseletSubject.next(caseletData);
  }

}
