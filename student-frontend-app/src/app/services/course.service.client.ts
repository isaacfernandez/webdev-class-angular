export class CourseServiceClient {
  COURSE_URL = 'https://wbdv-s2-1.herokuapp.com/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}

export class ModuleServiceClient {
  MODULE_URL = 'https://wbdv-s2-1.herokuapp.com/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
export class WidgetServiceClient {
  WIDGET_URL = 'https://wbdv-s2-1.herokuapp.com/api/lesson/LESSON_ID/widget';

  findWidgetsForLesson(lessonId) {
    return fetch(this.WIDGET_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}

export class LessonServiceClient {

  LESSON_URL = 'https://wbdv-s2-1.herokuapp.com/api/course/COURSE_ID/module/MODULE_ID/lesson';

  findLessonsForModule(moduleId, courseId) {
    return fetch(this.LESSON_URL
      .replace('MODULE_ID', moduleId)
      .replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
