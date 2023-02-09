import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-emloyee-dashboard',
  templateUrl: './emloyee-dashboard.component.html',
  styleUrls: ['./emloyee-dashboard.component.css']
})
export class EmloyeeDashboardComponent {

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd !: boolean ;
  showUpdate !: boolean ;
  constructor(private formbuilder: FormBuilder,private apiService: ApiService ){}


    ngOnInit(): void {
      this.formValue = this.formbuilder.group({
        firstName : [''],
        lastName : [''],
        emailId : [''],
        mobileNo : [''],
        salary : ['']
      })

      this.getAllEmployee();
    }
    
    clickAddEmployee(){
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;
    }
    
    postEmployeeDetails(){
      debugger
      this.employeeModelObj.firstName = this.formValue.value.firstName;
      this.employeeModelObj.lastName = this.formValue.value.lastName;
      this.employeeModelObj.emailId = this.formValue.value.emailId;
      this.employeeModelObj.mobileNo = this.formValue.value.mobileNo;
      this.employeeModelObj.salary = this.formValue.value.salary;

      this.apiService.postEmployee(this.employeeModelObj).subscribe(res => {
        console.log("res is : ",res);
        alert("Employee added successfully")
        let ref = document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
      err =>{
        alert( "something went wrong");
      })
    }

    getAllEmployee(){
      this.apiService.getEmployee().subscribe(res => {
          this.employeeData = res;
      })
    }

    deleteEmployee( row : any ){
      debugger
      this.apiService.deleteEmployee(row.id).subscribe(res => {
        alert("Employee deleted");
        this.getAllEmployee();
      },
      err =>{alert(err.message)});
    }

    onEdit( row : any){
      this.showAdd = false;
      this.showUpdate = true;
      this.employeeModelObj.id = row.id;
      this.formValue.controls['firstName'].setValue(row.firstName);
      this.formValue.controls['lastName'].setValue(row.lastName);
      this.formValue.controls['emailId'].setValue(row.emailId);
      this.formValue.controls['mobileNo'].setValue(row.mobileNo);
      this.formValue.controls['salary'].setValue(row.salary);

    }

    updateEmployeeDetails(){
      this.employeeModelObj.firstName = this.formValue.value.firstName;
      this.employeeModelObj.lastName = this.formValue.value.lastName;
      this.employeeModelObj.emailId = this.formValue.value.emailId;
      this.employeeModelObj.mobileNo = this.formValue.value.mobileNo;
      this.employeeModelObj.salary = this.formValue.value.salary;
      this.apiService.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
      .subscribe(res => {
        alert("updated successfully");
        let ref = document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      })
    }

}
