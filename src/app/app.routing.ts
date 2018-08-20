import {Routes, RouterModule} from '@angular/router';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {CourseComponent} from "./course/course.component";
import {AdminComponent} from "./admin/admin.component";
import {SectionsComponent} from "./sections/sections.component";



const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin/course', component: AdminComponent},
  {path: 'admin/course/:courseId/section', component: AdminComponent},
  {path: 'course/:courseId', component: CourseComponent},
  {path: 'course/:courseId/section', component: SectionsComponent},

  {path: 'course/:courseId/module/:moduleId', component: CourseComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseComponent},
  {path: '**', component: WhiteboardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
