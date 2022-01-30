import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpensesComponent } from 'src/app/pages/add-expenses/add-expenses.component';
import { AddIncomeComponent } from 'src/app/pages/add-income/add-income.component';
import { DashboardLayoutComponent } from 'src/app/pages/dashboard-layout/dashboard-layout.component';
import { ReportComponent } from 'src/app/pages/report/report.component';
import { TransactionComponent } from 'src/app/pages/transaction/transaction.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children:[
      {
        path: '',
        component: DashboardLayoutComponent
      },
      {
        path: '/add-income',
        component: AddIncomeComponent
      },
      {
        path: '/add-expenses',
        component: AddExpensesComponent
      },
      {
        path: '/report',
        component: ReportComponent
      },
      {
        path: '/transaction',
        component: TransactionComponent
      }
    ] 

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
