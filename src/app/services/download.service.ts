import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  public downloadPDF(content, caseletName) {
    const doc = new jsPDF();

    // const specialElementHandlers = {
    //   '#editor' : function(element, renderer) {
    //     return true;
    //   }
    // };

    const contentToSave  = content.nativeElement;

    doc.addHTML(contentToSave.innerHTML, function() {
      doc.save(caseletName + '.pdf');
    });
  }
}
