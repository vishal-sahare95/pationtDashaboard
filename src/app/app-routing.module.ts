import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './config/guard/auth.guard';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import("./pages/webhome/webhome.module").then(m=>m.WebhomeModule)
  },
  {
    path:'login',
    loadChildren:()=>import("./pages/login/login.module").then(m=>m.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import("./pages/dashboard/dashboard-routing.module").then(m=>m.DashboardRoutingModule),
    canActivate:[AuthGuard]
  },
  {
    path:'pationt',
    loadChildren:()=>import("./pages/pationt/pationt.module").then(m=>m.PationtModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
