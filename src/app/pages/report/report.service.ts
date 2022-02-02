import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private webService: WebService) { }
  getCurrentyearAnalysis(year:any){
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_date_by_year/${year}`, headers)
  }

  getallYear(){
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_all_year`, headers)
  }
  getAllMonth(){
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_all_month`, headers)
  }

  getCurrentmonthAnalysis(month:any,year:any){
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_date_by_months/${month}/${year}`, headers)
  }
}
