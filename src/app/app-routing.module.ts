import { GridsterDashboardComponent } from './gridster-dashboard/gridster-dashboard/gridster-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', component: NavbarComponent, children: [
    {path: '', redirectTo: 'main-dashboard', pathMatch: 'full'},
    {path: 'main-dashboard', component: GridsterDashboardComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
