import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { Admin5Component } from './admin5/admin5.component';
import { Admin6Component } from './admin6/admin6.component';
import { Admin7Component } from './admin7/admin7.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SplashComponent } from './splash/splash.component';
import { User1Component } from './user1/user1.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';

const routes: Routes = [
  // { path: "home", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegisterComponent },
  { path: "", component: SigninComponent },
  { path: "splash", component: SplashComponent },
  { path: "user1", component: User1Component },
  { path: "user3", component: User3Component },
  { path: "user4", component: User4Component },
  { path: "admin1", component: Admin1Component },
  { path: "admin2", component: Admin2Component },
  { path: "admin3", component: Admin3Component },
  { path: "admin4", component: Admin4Component },
  { path: "admin7", component: Admin7Component },
  { path: "admin5", component: Admin5Component },
  { path: "admin6", component: Admin6Component },
  { path: "menu", component: MenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }