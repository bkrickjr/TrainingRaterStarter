import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UserService } from '../users.service';

@Component({
  templateUrl: './user-detail.component.html'
})
export class UsersDetailComponent implements OnInit {

  user: IUser;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService
  ) { } // constructor end

  ngOnInit() {
      let id: string | number = this.route.snapshot.paramMap.get('userId');
      // tslint:disable-next-line:radix
      id = isNaN(parseInt(id)) ? 0 : parseInt(id);
      if (id) {
          // get from the db
          this.userService.getUserById(id)
            .subscribe((user) => this.user = user);
      } else {
          // post new
          this.user = {
              id: 0,
              first: 'Starter Name',
              last: '',
              email: 'default@mail.com',
              phone: '',
              isTrainer: false,
              aboutMe: '',
              password: '',
              createdAt: '',
              updatedAt: '',
          }; // new user end
      } // if end
  } // ngOnInit end

  getLocalDateTime(): string {
    const startTime = new Date();
    startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
    return startTime.toISOString().slice(0, 16);
  } // getLocalDateTime end

  save(): void {
    if (!this.formValid()) {
        console.log('form invalid');
        return;
    } // if end
    this.userService.save(this.user)
        .subscribe((user) => {
        this.router.navigate(['users']);
        });
  } // save end

  private formValid(): boolean {
    return this.user.email ? true : false;
  } // formValid end

  cancel(): void {
    this.router.navigate(['users']);
  } // cancel end
} // class end
