import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddIncomeService } from './add-income.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  incomeForm: any =FormGroup
  expenseCategory: any =[]  
  pipe: any
  constructor(private fb: FormBuilder,private service: AddIncomeService) { 

      this.incomeForm = fb.group({
        amount: ['',Validators.required],
        date: ['',Validators.required],
        category: ['',Validators.required]

      })

      this.service.getIncomeCatName().subscribe(
        (data)=>{
            console.log(data)
            this.expenseCategory = data
        }
      )

   }

  ngOnInit(): void {
    

  }

  onSubmit(){
    
      console.log(this.incomeForm.value)
      this.pipe = new DatePipe('en-US');
      var newDate = this.pipe.transform(this.incomeForm.get('date').value,'Y-M-d')
      this.incomeForm.patchValue({
        date : newDate
      })
      this.service.addIncome(this.incomeForm.value).subscribe(
        (data) =>{
          console.log(data)
          this.incomeForm.reset()
        }
      )
  }

}
