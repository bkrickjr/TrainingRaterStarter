import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionsDetailComponent } from './sessions/session-detail/session-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'sessions/detail', component: SessionsDetailComponent },
  { path: 'users', component: UsersListComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
