import { Component, OnInit } from '@angular/core';
import { TeacherListDataService } from '../../services/teacher-list-data.service';
import { Teacher } from '../../services/teacher-list-data.service';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  name:string = "Vincent Mustillo";
  teachers: Teacher[];
  isToDisplayTeachers:boolean=false;

  constructor(private teacherListDataService: TeacherListDataService) {
    console.log('TeacherComponent constructor executed');
    this.name = 'VINCENT MUSTILLO';
  }

  ngOnInit() {
    console.log('TeacherComponent ngOnInit executed');
    this.teacherListDataService.getTeachers().subscribe((teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }

  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }

}
