import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import {ClasseComponent} from "./classe/classe.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";
import {DepartmentClassesComponent} from "./department-classes/department-classes.component";
import {ClasseEtudiantComponent} from "./classe-etudiant/classe-etudiant.component";

const routes: Routes = [

{path: "home", component:HomeComponent},
{path: "department", component:DepartmentComponent},
{path: "department/:idDepartment", component:DepartmentClassesComponent},
{path: 'classe',component: ClasseComponent},
{path: 'classe/:idDepartment/:idClasse',component: ClasseEtudiantComponent},
{path: 'etudiant',component: EtudiantComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
