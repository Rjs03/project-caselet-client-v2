import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingCaseletsComponent } from './components/pending-caselets/pending-caselets.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditCaseletComponent } from './components/edit-caselet/edit-caselet.component';
import { TagInputModule } from 'ngx-chips';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PendingCaseletsComponent, EditCaseletComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TagInputModule,
    QuillModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule
  ]
})
export class AdminModule { }
