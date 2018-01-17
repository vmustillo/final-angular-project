import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // importing Http
import 'rxjs/add/operator/map'; // importing react JS extension operator map

@Injectable()
export class TeacherListDataService {

  constructor(public http: Http) {
    console.log("TeacherListDataService constructor executing");
  }

  getTeachers() {
    return this.http.get('http://localhost:9016/api/v1/teachers')
      .map(response => response.json());
  }
}

export interface Teacher {
  name:string,
  lastname:string
}