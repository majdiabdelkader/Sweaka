import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../model/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _http:HttpClient;
  constructor(http : HttpClient) {
    this._http=http;
  }

  getAllDepartment()
  {
     return this._http.get<Department[]>("./assets/data.json");
  }


}
