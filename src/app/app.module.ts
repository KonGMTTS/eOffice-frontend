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
import { Admin5Component } from './admin5/admin5.component';
import { Admin6Component } from './admin6/admin6.component';
import { MenuComponent } from './menu/menu.component';
import { User2Component } from './user2/user2.component';
import { User5Component } from './user5/user5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    LoginComponent,
    Admin1Component,
    Admin2Component,
    Admin3Component,
    Admin4Component,
    SplashComponent,
    Admin7Component,
    User1Component,
    Admin5Component,
    Admin6Component,
    MenuComponent,
    User2Component,
    User3Component,
    User4Component,
    User5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
