import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCaseletComponent } from './components/add-caselet/add-caselet.component';


const routes: Routes = [
  {path: 'addCaselet', component: AddCaseletComponent},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
