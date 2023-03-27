import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { Admin7Component } from './admin7/admin7.component';
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
  { path: "user1splash", component: User1Component },
  { path: "admin1", component: Admin1Component },
  { path: "admin2", component: Admin2Component },
  { path: "admin3", component: Admin3Component },
  { path: "admin4", component: Admin4Component },
  { path: "admin7", component: Admin7Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }