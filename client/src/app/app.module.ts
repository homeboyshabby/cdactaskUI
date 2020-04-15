import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { InsertformComponent } from './insertform/insertform.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModel, FormsModule, NgForm } from '@angular/forms';
import { UpdateformComponent } from './updateform/updateform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatDatepickerModule } from '@angular/material/datepicker/datepicker-module';
// import {  MatInputModule} from '@angular/material/input';
// import {  MatNativeDateModule } from '@angular/material/datepicker/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowlistComponent,
    InsertformComponent,
    UpdateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    // MatDatepickerModule,
    // MatInputModule
    // MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
