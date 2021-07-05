import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { BoardUiComponent } from './board-ui/board-ui.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthCancelGuard } from './guard/auth-cancel.guard';

const routes: Routes = [
  {path: '' ,component : HomepageComponent},
  {path: 'login', component : LoginComponent , canActivate : [AuthCancelGuard]},
  {path: 'signup', component : RegisterComponent, canActivate : [AuthCancelGuard]},
  {path: 'play', component : BoardUiComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
