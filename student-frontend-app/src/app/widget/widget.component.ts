import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setContext(params));
  }

  context;
  widgets = [];

  setContext(params) {
    this.context = params;
    console.log(params);
    this.loadWidgets(params.lessonId);
  }

  loadWidgets(lessonId) {
    if (lessonId == undefined) {
      this.widgets = [];
      return;
    }
    console.log(lessonId);
    this.service.findWidgetsForLesson(lessonId)
      .then(widgets => {
        console.log(widgets);
        this.widgets = widgets;
      });
  }

  ngOnInit() {
  }

}
