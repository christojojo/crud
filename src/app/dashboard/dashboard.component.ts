import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { EmployeeModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      pincode: [''],
      phone: ['']

    })
  }
postEmployeeDetailes(){
  this.employeeModelObj.firstName = this.formValue.value.firstName;
  this.employeeModelObj.lasttName = this.formValue.value.lastName;
  this.employeeModelObj.address = this.formValue.value.address;
  this.employeeModelObj.pincode = this.formValue.value.pincode;
  this.employeeModelObj.phone = this.formValue.value.phone;

this.api.postEmployee
}
}
