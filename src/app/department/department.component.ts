import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import {Department} from "../model/Department";
import {Router} from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  ListDepartment :Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe((res)=> {
      this.ListDepartment = res;
    });
  }

}
