import { NgModule } from '@angular/core';
import { UserService } from './users.service';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations: [
        UsersListComponent,
        UsersDetailComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [
        UserService,
    ],
})
export class UsersModule { }
