

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesComponentComponent } from './messages-component/messages-component.component';
import { AppRoutingModule } from './/app-routing.module';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { OtherComponent } from './other/other.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    MessagesComponentComponent,
    PersonDetailsComponent,
    OtherComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
      MatButtonModule,
      MatCheckboxModule
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      MatButtonModule,
      MatCheckboxModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule,
      HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



