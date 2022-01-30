import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddExpensesService } from './add-expenses.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  ExpenseForm: any =FormGroup
  expenseCategory: any =[]  
  pipe: any
  constructor(private fb: FormBuilder,private service: AddExpensesService) {

    this.ExpenseForm = fb.group({
      amount: ['',Validators.required],
      date: ['',Validators.required],
      category: ['',Validators.required]

    })

    this.service.getExpenseCatName().subscribe(
      (data)=>{
          console.log(data)
          this.expenseCategory = data
      }
    )
   }

  ngOnInit(): void {
  }

  onSubmit(){

      this.service.addExpense(this.ExpenseForm.value).subscribe(
        (data)=>{
          console.log(data)
        }
      )
  }

}
