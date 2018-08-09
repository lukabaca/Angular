import { BrowserModule } from '@angular/platform-browser';
import {Component, Input, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

import { FormsModule } from '@angular/forms';
import { MessagesComponentComponent } from './messages-component/messages-component.component';
import { AppRoutingModule } from './/app-routing.module';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    MessagesComponentComponent,
    PersonDetailsComponent,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
      MatButtonModule,
      MatCheckboxModule
  ],
  imports: [
    BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      Component,
      Input
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
