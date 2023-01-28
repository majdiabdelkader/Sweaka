import {Component, OnInit} from '@angular/core';
import {Department} from "../model/Department";
import {DepartmentService} from "../services/department.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Classe} from "../model/Classe";

@Component({
  selector: 'app-department-classes',
  templateUrl: './department-classes.component.html',
  styleUrls: ['./department-classes.component.css']
})
export class DepartmentClassesComponent implements OnInit {
  ListDepartment :Department[] = [];
  ListClasse :Classe[] = [];
  idDepartment : any ;

  constructor(private departmentService: DepartmentService ,private router:Router,private activated:ActivatedRoute) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe((res)=> {
      this.ListDepartment = res;
      this.activated.paramMap.subscribe((params) => {
        this.idDepartment = params.get('idDepartment');
        this.ListClasse = this.ListDepartment.filter((dep: { id: any; }) => dep.id ==this.idDepartment)[0].classes;
      })
    });


  }

  etudiant(idClass:any)
  {
    this.router.navigate(["/classe/"+this.idDepartment+"/"+idClass ]);
  }
}
