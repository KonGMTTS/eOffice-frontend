import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SplashComponent } from './splash/splash.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';

const routes: Routes = [
  // { path: "home", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: SigninComponent },
  { path: "splash", component: SplashComponent },
  { path: "admin3", component: Admin3Component },
  { path: "admin4", component: Admin4Component },
  { path: "admin4", component: MenuComponent },
  { path: "user3", component: User3Component },
  { path: "user4", component: User4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }