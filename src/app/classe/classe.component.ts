import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../services/department.service";
import {Department} from "../model/Department";
import {Classe} from "../model/Classe";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  ListDepartment : Department[] =[];
  ListClasse : Classe[] =[];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
  this.getClasses();
  }

  getClasses()
  {
    this.departmentService.getAllDepartment().subscribe((res)=> {
      this.ListDepartment = res;
      if (this.ListDepartment && this.ListDepartment.length !== 0) {
        for (let i = 0; i < this.ListDepartment.length; i++) {
          for (let j = 0; j < this.ListDepartment[i].classes.length; j++) {
            this.ListClasse.push(this.ListDepartment[i].classes[j]);
          }
        }
      }
    });
  }
}
