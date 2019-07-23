import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseletService {

  constructor(private httpClient: HttpClient) { }

  getCaselets(pageNo, limit) {
    return this.httpClient.get(environment.serverUrl + environment.caselet + '?pageNo=' + pageNo + '&limit=' + limit);
  }

  getCaseletById(caseletId) {
    return this.httpClient.get(environment.serverUrl + environment.caselet + caseletId);
  }

  getCaseletByAuthor(mid) {
    return this.httpClient.get(environment.serverUrl + environment.caselet + environment.save);
  }

  saveCaselet(caselet) {
    return this.httpClient.post(environment.serverUrl + environment.caselet, caselet);
  }

  saveImage(image) {
    const imageData = new FormData();
    imageData.append('image', image);
    return this.httpClient.post(environment.serverUrl + environment.image, imageData);
  }

  getPendingCaselets(options) {
    const adminMidString = options.adminMid ? 'adminMid=' + options.adminMid + '&' : '';
    const statusString = options.status ? 'status=' + options.status + '&' : '';
    const fromDateString = options.fromDate ? 'fromDate=' + options.fromDate : '';
    const queryString = adminMidString + statusString + fromDateString;
    const finalString = queryString.length > 0 ? '?' + queryString : queryString;
    return this.httpClient.get(environment.serverUrl + environment.admin  + finalString);
  }

  getPendingCaselet(caseletId) {
    return this.httpClient.get(environment.serverUrl + environment.admin + caseletId);
  }

  approveCaselet(caselet) {
    return this.httpClient.post(environment.serverUrl + environment.admin, caselet);
  }

  rejectCaselet(message, caseletId) {
    return this.httpClient.put(environment.serverUrl + environment.admin + caseletId, message);
  }

  getMostSharedCaselet() {
    return this.httpClient.get(environment.serverUrl + environment.caselet + environment.share);
  }

  getMostLikedCaselet() {
    return this.httpClient.get(environment.serverUrl + environment.caselet + environment.like);
  }

  likeCaselet (caseletId) {
    return this.httpClient.put(environment.serverUrl + environment.caselet + environment.like + caseletId, {});
  }

  shareCaselet (shareCaseletData, id) {
    return this.httpClient.put(environment.serverUrl + environment.caselet + environment.share + id, shareCaseletData);
  }

  downloadCaselet (id) {
    // const options = {
    //   'Accept': 'application/pdf',
    // };
    // const headers = new HttpHeaders(options);
    const httpOptions = {
      responseType  : 'arraybuffer' as 'json'
      //  'responseType'  : 'blob' as 'json'        //This also worked
    };
    // tslint:disable-next-line:max-line-length
    // return this.httpClient.put(environment.serverUrl + environment.caselet + environment.download + id, {}, httpOptions).pipe(map(
    //   (res: any) => {
    //       return new Blob([res.blob()], { type: 'application/pdf' });
    //   }));

      return this.httpClient.put(environment.serverUrl + environment.caselet + environment.download + id, {}, httpOptions);
  }
}
