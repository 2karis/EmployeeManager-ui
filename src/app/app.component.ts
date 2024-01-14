import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
    console.log(currEmployee);
  }
}
