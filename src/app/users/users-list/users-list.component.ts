import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];
  constructor(
    private userService: UserService,
    private router: Router
    ) { } // constructor end

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
  } // ngOnInit end

  goToAdd(): void {
    this.router.navigate(['users/add']);
  } // goToAdd end

  goToEdit(id: number): void {
    this.router.navigate([`users/${id}`]);
  } // goToEdit end
} // class end
