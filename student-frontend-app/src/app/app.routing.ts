import {Routes, RouterModule} from '@angular/router';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";



const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: WhiteboardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
