import { NgModule } from '@angular/core';
import { AuthGuard } from './common/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/auth/login.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/user-detail/user-detail.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionsDetailComponent } from './sessions/session-detail/session-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sessions', component: SessionsListComponent, canActivate: [AuthGuard] },
  { path: 'sessions/:sessionId', component: SessionsDetailComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'users/:userId', component: UsersDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
