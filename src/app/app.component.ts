import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
 import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public employees : Employee[];

  public employee : Employee;

  constructor(private employeeService : EmployeeService){
    this.employees = [];
    this.employee = <Employee>{};
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=>{
        this.employees=response;
        console.log(this.employees);
      },
      (error :HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onOpenModal(currEmployee? : Employee): void{
    this.employee = <Employee>currEmployee;
  }

  public onCreateEmployee(createForm : NgForm): void{
    this.employeeService.createEmployee(createForm.value).subscribe({
      error: (e) => {
        alert(e);
      },
      complete: () => {
        this.getEmployees();
        createForm.reset();
        document.getElementById("createClose")?.click()
      } 
    })
  }

  public onUpdateEmployee(updateForm : NgForm): void{
    this.employeeService.updateEmployee(<Employee>updateForm.value).subscribe({
      error: (error) => {
        alert(error);
      },
      complete: () => {
        this.getEmployees();
        updateForm.reset();
        document.getElementById("updateClose")?.click()
      } 
    })
  }

  public onDeleteEmployee(id:number): void{
    this.employeeService.deleteEmployee(id).subscribe({
      error: (error) => {
        alert(error);
      },
      complete: () => {
        this.getEmployees();
        document.getElementById("deleteClose")?.click()
      } 
    })
  }
}
