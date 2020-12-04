import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ReportsComponent} from './reports/reports.component';
import {BansComponent} from './bans/bans.component';

// /admin/ prepended to all routes
const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'bans', component: BansComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
