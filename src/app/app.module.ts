import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { SplashComponent } from './splash/splash.component';
import { Admin7Component } from './admin7/admin7.component';
import { User1Component } from './user1/user1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    LoginComponent,
    SplashComponent,
    Admin7Component,
    User1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
