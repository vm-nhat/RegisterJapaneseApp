import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfClassesComponent } from './list-of-classes/list-of-classes.component';
import { SidebarAppComponent } from './sidebar-app/sidebar-app.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DetailOfClassComponent } from './detail-of-class/detail-of-class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterJapaneseModalComponent } from './register-japanese-modal/register-japanese-modal.component';
import { NgbdDatepickerPopupModule } from './datepicker-popup/datepicker-popup.module';
@NgModule({
  declarations: [
    AppComponent,
    ListOfClassesComponent,
    SidebarAppComponent,
    DetailOfClassComponent,
    RegisterJapaneseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbdDatepickerPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
