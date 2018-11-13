import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [
  ];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
    // this.users = this.userService.getUsers();
  }

}
