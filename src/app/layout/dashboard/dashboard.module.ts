import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { DashboardLayoutComponent } from 'src/app/pages/dashboard-layout/dashboard-layout.component';
import { AddExpensesComponent } from 'src/app/pages/add-expenses/add-expenses.component';
import { AddIncomeComponent } from 'src/app/pages/add-income/add-income.component';
import { ReportComponent } from 'src/app/pages/report/report.component';
import { TransactionComponent } from 'src/app/pages/transaction/transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,
    AddExpensesComponent,
    AddIncomeComponent,
    ReportComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class DashboardModule { }
