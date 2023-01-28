import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import { ClasseComponent } from './classe/classe.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DepartmentClassesComponent } from './department-classes/department-classes.component';
import { ClasseEtudiantComponent } from './classe-etudiant/classe-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ClasseComponent,
    EtudiantComponent,
    DepartmentClassesComponent,
    ClasseEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
