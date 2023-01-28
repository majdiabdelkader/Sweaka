import {Component, OnInit} from '@angular/core';
import {Department} from "../model/Department";
import {Classe} from "../model/Classe";
import {DepartmentService} from "../services/department.service";
import {Etudiant} from "../model/Etudiant";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-classe-etudiant',
  templateUrl: './classe-etudiant.component.html',
  styleUrls: ['./classe-etudiant.component.css']
})
export class ClasseEtudiantComponent implements OnInit {
  ListDepartment : Department[] =[];
  ListClasse : Classe[] =[];
  ListEtudiant : Etudiant[] = [];
  constructor(private departmentService: DepartmentService,private router:Router,private activated:ActivatedRoute) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe((res)=> {
      this.ListDepartment = res;
      this.activated.paramMap.subscribe((params) => {
        let idDepartment = params.get('idDepartment');
        let idClasse = params.get('idClasse');
        this.ListClasse = this.ListDepartment.filter((dep: { id: any; }) => dep.id ==idDepartment)[0].classes;
        this.ListEtudiant = this.ListClasse.filter((classe: { idClasse: any; }) => classe.idClasse ==idClasse)[0].etudiants;

      })
    });
  }
}
