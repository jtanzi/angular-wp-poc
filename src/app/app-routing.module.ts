import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteSetupComponent } from './site-setup/site-setup.component';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
 
const appRoutes: Routes = [
  { path: 'site-setup', component: SiteSetupComponent },
  { path: 'site-edit',        component: SiteEditComponent },
  { path: 'login',        component: LoginComponent },
  { path: '',   redirectTo: '/site-setup', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}