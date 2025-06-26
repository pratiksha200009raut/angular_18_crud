import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ Fix: styleUrl → styleUrls
})
export class AppComponent {
  employeeeForm: FormGroup;

  employeeobj: EmployeeModel = new EmployeeModel();

  constructor() {
    this.employeeeForm = this.createForm();
  }

  // ✅ Create the form group
  createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.employeeobj.name),
      email: new FormControl(this.employeeobj.emailId),
      employeeId: new FormControl(this.employeeobj.employeeId),
      city: new FormControl(this.employeeobj.city),
      state: new FormControl(this.employeeobj.state),
      contactNo: new FormControl(this.employeeobj.contactNo),
      address: new FormControl(this.employeeobj.address)
    });
  }

  // ✅ Save data to localStorage
  onsave(): void {
    debugger;
    const oldData = localStorage.getItem('employeeData');
    let employeeList = [];

    if (oldData !== null) {
      employeeList = JSON.parse(oldData);
    }

    // Optionally auto-increment employeeId
    this.employeeeForm.controls['employeeId'].setValue(employeeList.length + 1);

    // Add new data to the list
    employeeList.push(this.employeeeForm.value);

    // Save back to localStorage
    localStorage.setItem('employeeData', JSON.stringify(employeeList));

    // Reset the form
    this.employeeeForm.reset();
    alert("Employee added successfully!");
  }
}
