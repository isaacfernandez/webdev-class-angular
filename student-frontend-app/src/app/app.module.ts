import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseServiceClient} from "./services/course.service.client";
import { LessonServiceClient} from "./services/lesson.service.client";
import { SectionServiceClient} from "./services/section.service.client";
import { UserServiceClient} from "./services/user.service.client";
import { routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    LoginComponent,
    RegisterComponent,
    AdminPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    LessonServiceClient,
    SectionServiceClient,
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
