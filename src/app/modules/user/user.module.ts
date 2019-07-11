import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { AddCaseletComponent } from './components/add-caselet/add-caselet.component';
import { UserRoutingModule } from './user-routing.module';
import { ReviewCaseletComponent } from './components/review-caselet/review-caselet.component';

@NgModule({
  declarations: [AddCaseletComponent, ReviewCaseletComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    TagInputModule,
    QuillModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule { }
