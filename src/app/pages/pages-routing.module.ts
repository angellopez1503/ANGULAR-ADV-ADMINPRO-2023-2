import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent,data:{titulo:'Dashboard'} },
      { path: 'grafica1', component: Grafica1Component,data:{titulo:'Grafica'} },
      { path: 'progress', component: ProgressComponent,data:{titulo:'ProgressBar'} },
      { path: 'promesa', component: PromesaComponent,data:{titulo:'Promesa'} },
      { path: 'rxjs', component: RxjsComponent,data:{titulo:'Rxjs'} },
      { path: 'account-settings', component: AccountSettingsComponent ,data:{titulo:'Ajustes de cuenta'} },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
