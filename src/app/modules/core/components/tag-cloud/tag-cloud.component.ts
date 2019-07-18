import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { TagsService } from 'src/app/services/tags.service';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {

  options: CloudOptions = {
    width : 1,
    height : 200,
    overflow: false,
  };

  dataFetched = false;

  serverTags = [];

  arraydata = [];

  data: CloudData[] = this.arraydata;

  constructor(private tagsService: TagsService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagsService.getTags().subscribe((response: any) => {
      this.serverTags = response.data.tags;
      this.serverTags.map((serverTag) => {
        this.arraydata.push({
          text: serverTag.name,
          id: serverTag.id,
          weight: serverTag.count
        });
      });
      this.dataFetched = true;
    });
  }

  tagClicked(clicked: any) {
    this.tagsService.searchCaseletByTag(clicked.text).subscribe((response: any) => {
      const caseletData = {
        searchValue: '',
        caselets: response.data.projects
      };
      this.commonService.setData(caseletData);
    });
  }

}
