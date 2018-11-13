import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './users/users.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionsModule } from './sessions/sessions.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SessionsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
