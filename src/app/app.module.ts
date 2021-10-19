import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UploadComponent } from './components/upload/upload.component';

//import  { FileSelectDirective }  from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    UserFormComponent,
    UploadComponent
    //FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
