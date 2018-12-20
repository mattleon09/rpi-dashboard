import { PositionsService } from './core/services/positions.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule,
MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {GridsterModule} from 'angular-gridster2';


import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { CurrencyCardComponent } from './currency/currency-card/currency-card.component';
import { BaseCardComponent } from './shared/base-card/base-card.component';
import { GridsterDashboardComponent } from './gridster-dashboard/gridster-dashboard/gridster-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TableComponent,
    CurrencyCardComponent,
    BaseCardComponent,
    GridsterDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    GridsterModule
  ],
  providers: [PositionsService],
  bootstrap: [AppComponent],
  exports: [CurrencyCardComponent]
})
export class AppModule { }
