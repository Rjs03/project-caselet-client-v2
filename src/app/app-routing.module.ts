import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/core/components/landing/landing.component';
import { CaseletDetailsComponent } from './modules/core/components/caselet-details/caselet-details.component';
import { CaseletSupportComponent } from './modules/core/components/caselet-support/caselet-support.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'caselet/:caseletId', component: CaseletDetailsComponent},
  {path: 'support', component: CaseletSupportComponent},
  {path: 'user', loadChildren: './modules/user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
