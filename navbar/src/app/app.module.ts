import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TestroutComponent } from './testrout/testrout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import {Injectable} from  '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType
} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    TestroutComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    AboutusComponent,
    ServicesComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    Injectable,
    HttpClient,
    HttpRequest,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
const firebaseConfig = {
  apiKey: "AIzaSyCs_6VnTVhCX6PMmoeO-BYpp8qeslm3ePE",
  authDomain: "sample-db-badb4.firebaseapp.com",
  databaseURL: "https://sample-db-badb4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sample-db-badb4",
  storageBucket: "sample-db-badb4.appspot.com",
  messagingSenderId: "440770667428",
  appId: "1:440770667428:web:24401e9ae7e114c5429731"
};
const app = initializeApp(firebaseConfig);