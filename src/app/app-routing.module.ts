import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SplashComponent } from './splash/splash.component';
import { User1Component } from './user1/user1.component';

const routes: Routes = [
  // { path: "home", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: SigninComponent },
  { path: "splash", component: SplashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }