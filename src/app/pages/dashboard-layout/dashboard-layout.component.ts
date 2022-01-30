import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  @ViewChild("income") el?: ElementRef;
  public index: any
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Income',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [],
        label: 'Expenses',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };
  
  public lineChartOptions: ChartConfiguration['options'] = {

    onClick: function(event?: ChartEvent, active?: any){

      const chart = active[0]['element']['$context']['raw']
      const index = active[0]['index']
      console.log(index)
      
      var element = <HTMLElement>(document.getElementById('income'))
      element.innerHTML = 'value: '+chart
    
    },

    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  

  
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  chartDataIncome : any = [16000, 15500, 8000, 9000, 10000, 5500, 4300]
  chartDataExpense: any = [9500, 6300, 6300, 1900, 8600, 2700, 2560]
  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let j = 0; j < this.chartDataIncome.length; j++) {
      this.lineChartData.datasets[0].data[j] = this.chartDataIncome[j]
    }
    for (let j = 0; j < this.chartDataExpense.length; j++) {
      this.lineChartData.datasets[1].data[j] = this.chartDataExpense[j]
    }
    this.chart?.update();
  }

  goTopage(url:string){

    if(url=='addincome'){

      this.router.navigate(['/add-income'])
    }else if(url =='addexpenses'){
      this.router.navigate(['/add-expenses'])
    }else{
      this.router.navigate(['/report'])
    }
    
  }

}
