import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingCaseletsComponent } from './components/pending-caselets/pending-caselets.component';
import { EditCaseletComponent } from './components/edit-caselet/edit-caselet.component';

const routes: Routes = [
  {path: 'pendingCaselets', component: PendingCaseletsComponent},
  {path: 'approveCaselet/:caseletId', component: EditCaseletComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
