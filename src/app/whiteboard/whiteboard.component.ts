import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})

export class WhiteboardComponent implements OnInit {

  admin = true;
  loggedIn;
  courses;
  sections = [];

  constructor(private service: UserServiceClient,
              private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) {
  }

  ngOnInit() {
    this.service.isloggedin()
      .then(response => {
        return response.json()
      })
      .then(resp => {
      console.log(resp);
      this.loggedIn = resp;
      return this.loggedIn;
    }).then(success => {
      if (!this.loggedIn) { return; }
      this.courseService.findAllCourses()
        .then(resp => {
          this.courses = resp;
        });
    })

  }


}
