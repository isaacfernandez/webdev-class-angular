import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import {CourseServiceClient, ModuleServiceClient, LessonServiceClient, WidgetServiceClient} from "./services/course.service.client";
import { SectionServiceClient} from "./services/section.service.client";
import { UserServiceClient} from "./services/user.service.client";
import { routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionsComponent } from './sections/sections.component';
import { CourseComponent } from './course/course.component';
import { ModuleComponent } from './module/module.component';
import { WidgetComponent } from './widget/widget.component';
import { LessonComponent } from './lesson/lesson.component';
import { EnrollComponent } from './enroll/enroll.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ProfileComponent,
    SectionsComponent,
    CourseComponent,
    ModuleComponent,
    WidgetComponent,
    LessonComponent,
    AdminComponent,
    EnrollComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    LessonServiceClient,
    SectionServiceClient,
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
