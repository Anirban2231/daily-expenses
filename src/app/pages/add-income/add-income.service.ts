import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddIncomeService {

  constructor(private webService: WebService) { }
  getIncomeCatName() {
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`expenses_category`, headers)
  }
  addIncome(value:any){
    let headers = new  HttpHeaders ({'Content-Type':  'application/json'})
    return this.webService.post('save_daily_income',{value}, headers)
  }
}
