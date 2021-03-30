import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfClassesComponent } from './list-of-classes/list-of-classes.component';
import { SidebarAppComponent } from './sidebar-app/sidebar-app.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ListOfClassesComponent,
    SidebarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
