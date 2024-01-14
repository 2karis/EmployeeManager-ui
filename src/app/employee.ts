import { Timestamp } from "rxjs";

export interface Employee{
    id: number;
    name: string;
    email:string;
    title:string;
    phone :string;
    imageUrl:string;
    employeeCode:string;
    createdAt:Date;
    updatedAt:Date;
}