import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseServiceClient} from "../services/course.service.client";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private service: CourseServiceClient,
    private sectionService: SectionServiceClient,
    private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courses = [];
  courseId;
  sections = [];


  setParams(params) {
    this.courseId = params['courseId'];
    console.log(this.courseId);
    this.loadFields();
  }

  loadFields() {
    console.log('loading');
    this.service.findAllCourses()
      .then(resp => {
        this.courses = resp;
        console.log(this.courses);
        if (this.courseId !== undefined) {
          console.log('getting sections');
          this.sectionService.findSectionsForCourse(this.courseId)
            .then(sections => this.sections = sections);
        } else {
          console.log('blanking');
          return [];
        }})
      .then( sects =>
        this.sections = sects);
  }

  createSection(sectionName, seats) {
    this
      .sectionService
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadFields();
      });
  }
  ngOnInit() {
    this.loadFields();
  }

}
