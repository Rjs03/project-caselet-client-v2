import { Component, OnInit } from '@angular/core';
import { PreloaderService } from 'src/app/services/preloader.service';
import { FilterService } from 'src/app/services/filter.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-caselet-filter',
  templateUrl: './caselet-filter.component.html'
})
export class CaseletFilterComponent implements OnInit {

  behavioralPackages: any;
  imageUrl: any;
  imageBlobUrl: any;
  filtersLoaded = false;
  showTechnology = false;
  showTools = false;
  showDetails: any;
  verticals: any;
  offerings: any;
  subPractices: any;
  subVerticals: any;
  technologies: any;
  tools: any;
  mid: any;
  name: any;
  jobTitle: any;
  practices: any;
  subPracticeSelected: any;
  technologyFilter = {};
  toolFilter = {};

  constructor(private preloaderService: PreloaderService,
    private filterService: FilterService,
    private dataService: DataServiceService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const user = this.preloaderService.getUserDetails();
    this.userData(user);
    this.getFilters();
    this.onPracticeSelect('');
    this.getThumbnail();
  }

  userData(user) {
    this.mid = user.mid;
    // console.log(this.mid);
    this.dataService.getUserName(this.mid).subscribe((userData: any) => {
      this.name = userData.value[0].displayName;
      this.jobTitle = userData.value[0].jobTitle;
    });
    // this.imageUrl = 'https://social.mindtree.com/User%20Photos/Profile%20Pictures/' + this.mid + '_LThumb.jpg';
  }

  getFilters() {
    this.filterService.getfilters().subscribe((response: any) => {
      this.verticals = response.data.filters.verticals;
      this.practices = response.data.filters.practice;
      this.subPracticeSelected = response.data.filters.subPractices;
      this.offerings = response.data.filters.offerings;
      this.subVerticals = response.data.filters.subVerticals;
      this.technologies = response.data.filters.technologies;
      this.tools = response.data.filters.tools;
      this.filtersLoaded = true;
    }, (error) => {
      alert(error.error.status.message);
    });
  }

  showNav() {
    this.showDetails = !this.showDetails;
  }

  toggleTools() {
    this.showTools = !this.showTools;
  }

  toggleTechnology() {
    this.showTechnology = !this.showTechnology;
  }

  getThumbnail(): void {
    this.dataService.getUserImage(this.mid).subscribe(
        (response) => {
          this.createImageFromBlob(response);
        });
  }
  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const base64data = reader.result;
      this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(base64data.toString());
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  onPracticeSelect(data) {
    if (data !== '') {
      this.subPractices = [];
      this.subPracticeSelected.map(subPracticeSelected => {
        // tslint:disable-next-line:triple-equals
        if (subPracticeSelected.practice.name == data) {
          this.subPractices.push(subPracticeSelected);
        }
      });
    }
  }

}
