import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTopage(url:string){

    if(url=='addincome'){

      this.router.navigate(['/addincome'])
    }else if(url =='addexpenses'){
      this.router.navigate(['/addexpenses'])
    }else{
      this.router.navigate(['/report'])
    }
    
  }

}
