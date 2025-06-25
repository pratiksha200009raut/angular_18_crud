import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeeForm?: FormGroup;

  employeeobj:EmployeeModel =new EmployeeModel();
  constructor(){
    this.createForm();
    
  }

  createForm(): void {
    this.employeeeForm = new FormGroup({
      name: new FormControl(this.employeeobj.name),
      email: new FormControl(this.employeeobj.emailId),
      employeeId: new FormControl(this.employeeobj.employeeId),
      city: new FormControl(this.employeeobj.city),
      state: new FormControl(this.employeeobj.state),
      contactNo: new FormControl(this.employeeobj.contactNo),
      address: new FormControl(this.employeeobj.address)
    });
  }
  onsave() {
    debugger;
    const oldData =localStorage.getItem('employeeData');
    if(oldData !== null){
      const parseData: any[] = JSON.parse(oldData);
      this.employeeeForm?.controls['empid'].setValue(parseData.length +1);
    }else{
      // Store the first employee entry in localStorage as an array
      localStorage.setItem('employeeData', JSON.stringify([this.employeeeForm?.value]));
      
    }

    }

  }
