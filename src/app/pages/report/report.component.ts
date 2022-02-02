import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  showChart: boolean = false
  income: any
  expense: any
  balance: any
  dataPie: any = []
  years: any =[]
  months: any= []
  monthsByName : any = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Dec']
  @ViewChild(BaseChartDirective) charts?: BaseChartDirective;
   /***********************************Pie Chart*********************************************/
   public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Income','Expenses','Balance' ],
    datasets: [ {
      data: []
    } ]
  };
  public pieChartType: ChartType = 'pie';
  /**************************************Pie chart*******************************************/
  constructor(private service : ReportService) { 

      this.service.getallYear().subscribe(
        (data) =>{
          console.log(data)
          this.years = data['years']
        }
      )
      this.service.getAllMonth().subscribe(
        (data) =>{
          console.log(data)
          this.months = data['months']
        }
      )
   }

  ngOnInit(): void {

    var date = new Date();
    var year = date.getUTCFullYear();

    this.service.getCurrentyearAnalysis(year).subscribe(
      (data) =>{

          console.log(data)
          this.dataPie=data
          this.pieChartData.datasets[0].data[0] = this.dataPie['income']
          this.pieChartData.datasets[0].data[1] = this.dataPie['expence']
          this.pieChartData.datasets[0].data[2] = this.dataPie['balance']

          this.showChart= true
          this.income = this.dataPie['income']
          this.expense = this.dataPie['expence']
          this.balance =  this.dataPie['balance']

      }
    )
  }
  
  filterByYear(event:any){
    
    this.service.getCurrentyearAnalysis(event.target.value).subscribe(
      (data) =>{

          console.log(data)
          this.dataPie=data
          this.pieChartData.datasets[0].data[0] = this.dataPie['income']
          this.pieChartData.datasets[0].data[1] = this.dataPie['expence']
          this.pieChartData.datasets[0].data[2] = this.dataPie['balance']

          this.showChart= true
          this.income = this.dataPie['income']
          this.expense = this.dataPie['expence']
          this.balance =  this.dataPie['balance']

          this.charts?.update()
      }
    )

    
  }

  filterByMonth(event:any,year:any){

      this.service.getCurrentmonthAnalysis(event.target.value,year).subscribe(
        (data)=>{
          this.dataPie=data
          this.pieChartData.datasets[0].data[0] = this.dataPie['income']
          this.pieChartData.datasets[0].data[1] = this.dataPie['expence']
          this.pieChartData.datasets[0].data[2] = this.dataPie['balance']

          this.showChart= true
          this.income = this.dataPie['income']
          this.expense = this.dataPie['expence']
          this.balance =  this.dataPie['balance']

          this.charts?.update()
        }
      )
  }

  
 
}
