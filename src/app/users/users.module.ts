import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
        CommonModule,
        FormsModule,
    ],
    providers: [
        UserService,
    ],
})
export class UsersModule { }
