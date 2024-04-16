;
import { DashboardComponent } from './dashboard/dashboard.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component"



@NgModule({
  declarations: [
    PageNotFoundComponent, DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent, DashboardComponent
  ]
})
export class PagesModule { }
