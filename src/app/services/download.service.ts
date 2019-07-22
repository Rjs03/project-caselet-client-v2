import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  public downloadPDF(content, data, caseletName) {

    // Working code but withhhout css ---

    // let doc = new jsPDF();
    // let specialElementHandlers = {
    //   '#editor' : function(element, renderer) {
    //     return true;
    //   }
    // };
    // doc.addHTML(content, 15, 15, {
    //   'width': 190,
    //   'elementHandlers': specialElementHandlers
    // }, () => {
    //   console.log('Something');
    //   doc.save(caseletName);
    // });
    html2canvas(content).then((canvas) => {
      console.log('Reached');
      const img = canvas.toDataURL('image/jpeg', 1);
      // const newHeight = new Image();
      // newHeight.src = img;
      const doc = new jsPDF('p', 'px', 'legal');
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(img, 'JPEG', 0, 0, width, height);
      doc.save(caseletName);
    });

    // ------------------------------------------

    // code with html2canvas
    // console.log('Test');
    // const pdf = new jsPDF();
    // pdf.addHTML(content, () => {
    //   console.log('Called');
    //   pdf.save('New pdf');
    // });
  }
}
