import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { SplashComponent } from './splash/splash.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { MenuComponent } from './menu/menu.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    LoginComponent,
    SplashComponent,
    Admin3Component,
    Admin4Component,
    MenuComponent,
    User3Component,
    User4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
