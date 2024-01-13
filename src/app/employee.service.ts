import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private appServerUrl = ''

  constructor( private http: HttpClient) { }

  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.appServerUrl}/employee/all`)
  }

  public getEmployee(id : number):Observable<Employee>{
    return this.http.get<Employee>(`${this.appServerUrl}/employee/get/${id}`)
  }
  public addEmployee(empolyee : Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.appServerUrl}/employee/create`, empolyee)
  }

  public updateEmployee(empolyee : Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.appServerUrl}/employee/update`, empolyee)
  }

  public deleteEmployee(id : number):Observable<void>{
    return this.http.delete<void>(`${this.appServerUrl}/employee/delete/${id}`)
  }
}
