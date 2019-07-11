import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { PreloaderService } from 'src/app/services/preloader.service';
import { SearchService } from 'src/app/services/search.service';
import { CommonService } from 'src/app/services/common.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  imageString = '';
  searchValue = '';
  role = '';
  imageUrl: any;
  router: string;
  imageFetched = false;
  user: any;

  constructor(private preloaderService: PreloaderService,
    private searchService: SearchService,
    private commonService: CommonService,
    private dataService: DataServiceService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.checkLogin();
    this.checkRefresh();
    this.user = this.preloaderService.getUserDetails();
    this.getThumbnail();
  }

  searchData() {
    this.searchService.search(this.searchValue, 1, 5).subscribe((response: any) => {
      const caseletData = {
        searchValue: this.searchValue,
        caselets: response.data.projects
      };
      this.commonService.setData(caseletData);
    });
  }

  checkRefresh() {
    this.commonService.getData().subscribe((caseletData: any) => {
      this.searchValue = caseletData.searchValue;
    });
  }

  checkLogin() {
    const user = this.preloaderService.getUserDetails();
    this.role = user.role;
  }

  getThumbnail(): void {
    this.dataService.getUserImage(this.user.mid).subscribe(
        (response) => {
          this.createImageFromBlob(response);
        });
  }
  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const base64data = reader.result;
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(base64data.toString());
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
