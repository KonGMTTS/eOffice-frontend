import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  // { path: "home", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: SigninComponent },
  { path: "splash", component: SplashComponent },
  { path: "admin3", component: Admin3Component },
  { path: "admin4", component: Admin4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }