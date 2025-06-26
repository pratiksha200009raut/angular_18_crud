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
  employeeList:EmployeeModel[] = [];

  constructor() {
    this.createForm();
    debugger;
    const oldData = localStorage.getItem('EmpData');
    this.employeeeForm = this.createForm();
    if(oldData != null){
      const parsdata = JSON.parse(oldData);
      this.employeeList = parsdata;

    }
  }
  reset(){
    this.employeeeForm = new EmployeeModel();
    this.createForm()

  }

  // ✅ Create the form group
  createForm():  FormGroup {
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
  onsave(){
    debugger;
    const oldData = localStorage.getItem('EmpData');

    if (oldData !== null) {
      const parseData = JSON.parse(oldData);
       // Optionally auto-increment employeeId
    this. employeeeForm.controls['empid'].setValue(parseData.length + 1);
    this.employeeList.unshift(this.employeeeForm.value);
    } else {
      this.employeeList.unshift(this.employeeeForm.value);
        }
localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
      }
      this.reset()
onEdit(item: EmployeeModel){
  this.employeeobj= item;
  this.createForm();
}
onupdate(){
  const record = this. employeeList.find(m=>m.employeeId== this.employeeeForm.controls['empid'].value);
  if (record != undefined){
    record.address = this.employeeeForm.controls['address'].value;
    record.address = this.employeeeForm.controls['address'].value;
    record.address = this.employeeeForm.controls['address'].value;
    record.address = this.employeeeForm.controls['address'].value;
    record.address = this.employeeeForm.controls['address'].value;
      this.reset()


  }
  localStorage.setItem('EmpData', JSON.stringify(this. employeeeForm));
  this.employeeobj= new EmployeeModel();
  this.createForm()
}
onDelete(id:number){
  const isDelete = confirm("Are you sure you want to delete this");
  if (isDelete) {
    const index = this.employeeList.findIndex(m=>m.employeeId == id);
  this.employeeList.splice(index,1);
  localStorage.setItem("Empdata",JSON.stringify(this. employeeeForm));
  

  }
}
}
