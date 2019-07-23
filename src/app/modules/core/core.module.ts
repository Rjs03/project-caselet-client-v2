import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { TagCloudComponent } from './components/tag-cloud/tag-cloud.component';
import { MostLikedCaseletsComponent } from './components/most-liked-caselets/most-liked-caselets.component';
import { MostSharedCaseletsComponent } from './components/most-shared-caselets/most-shared-caselets.component';
import { CaseletDetailsComponent } from './components/caselet-details/caselet-details.component';
import { CaseletFilterComponent } from './components/caselet-filter/caselet-filter.component';
import { CaseletsComponent } from './components/caselets/caselets.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { CaseletGridComponent } from './components/caselet-grid/caselet-grid.component';
import { CaseletListComponent } from './components/caselet-list/caselet-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CaseletSupportComponent } from './components/caselet-support/caselet-support.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPopupComponent } from './components/filter-popup/filter-popup.component';
import { CaseletShareComponent } from './components/caselet-share/caselet-share.component';
import { TagInputModule } from 'ngx-chips';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    TagCloudComponent,
    MostLikedCaseletsComponent,
    MostSharedCaseletsComponent,
    CaseletDetailsComponent,
    CaseletFilterComponent,
    CaseletsComponent,
    CaseletGridComponent,
    CaseletListComponent,
    CaseletSupportComponent,
    FilterPopupComponent,
    CaseletShareComponent
    ],
  imports: [
    CommonModule,
    TagCloudModule,
    TagInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent,
    LandingComponent,
    TagCloudComponent,
    MostLikedCaseletsComponent,
    MostSharedCaseletsComponent,
    CaseletDetailsComponent,
    CaseletFilterComponent,
    CaseletsComponent,
    CaseletSupportComponent
  ]
})
export class CoreModule { }
