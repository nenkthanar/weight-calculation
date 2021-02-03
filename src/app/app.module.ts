import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProcessComponent } from './process/process.component';
import {MatCardModule} from '@angular/material/card';
import { DatalogsComponent } from './datalogs/datalogs.component';
import { LoginComponent } from './login/login.component';
import { TogtableComponent } from './togtable/togtable.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftNavComponent,
    TopNavComponent,
    ProcessComponent,
    DatalogsComponent,
    LoginComponent,
    TogtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
     MatCardModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
