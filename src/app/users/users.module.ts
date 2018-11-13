import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './users.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UsersListComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [
        UserService,
    ],
})
export class UsersModule { }
