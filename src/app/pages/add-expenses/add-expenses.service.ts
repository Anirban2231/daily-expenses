import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddExpensesService {

  constructor(private webService: WebService) { }
  getExpenseCatName() {
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`expenses_category`, headers)
  }
  addExpense(value:any){
    let headers = new  HttpHeaders ({'Content-Type':  'application/json'})
    return this.webService.post('save_daily_expenses',{value}, headers)
  }
}
