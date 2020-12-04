import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import { ReportsComponent } from './reports/reports.component';
import { BansComponent } from './bans/bans.component';


@NgModule({
  declarations: [
    AdminComponent,
    ReportsComponent,
    BansComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule {
}
