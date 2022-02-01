import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private webService: WebService) { }

  getCurrentmonthAnalysis(month:any,year:any){
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_date_by_months/${month}/${year}`, headers)
  }
}
