import {Component, OnInit} from '@angular/core';
import {Department} from "../model/Department";
import {DepartmentService} from "../services/department.service";
import {Classe} from "../model/Classe";
import {Etudiant} from "../model/Etudiant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ListDepartment :Department[] = [];
  ListClasse :Classe[] = [];
  ListEtudiant: Etudiant[] = [];

  constructor(private departmentService: DepartmentService){}
  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe((res)=> {
      this.ListDepartment = res;
      if (this.ListDepartment && this.ListDepartment.length !== 0) {
        for (let i = 0; i < this.ListDepartment.length; i++) {
          if (this.ListDepartment[i].classes && this.ListDepartment[i].classes.length !== 0){
            for (let j = 0; j < this.ListDepartment[i].classes.length; j++) {
              this.ListClasse.push(this.ListDepartment[i].classes[j]);
              if (this.ListDepartment[i].classes[j].etudiants && this.ListDepartment[i].classes[j].etudiants.length !== 0) {
                for (let k = 0; k < this.ListDepartment[i].classes[j].etudiants.length; k++) {
                  this.ListEtudiant.push(this.ListDepartment[i].classes[j].etudiants[k]);
                }
              }
            }
          }
        }
      }
    });
  }
}
