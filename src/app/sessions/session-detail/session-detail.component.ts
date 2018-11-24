import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISession, SessionsService } from '../sessions.service';

@Component({
  templateUrl: './session-detail.component.html'
})
export class SessionsDetailComponent implements OnInit {

  session: ISession;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private sessionService: SessionsService
  ) { } // constructor end

  ngOnInit() {
      let id: string | number = this.route.snapshot.paramMap.get('sessionId');
      // tslint:disable-next-line:radix
      id = isNaN(parseInt(id)) ? 0 : parseInt(id);
      if (id) {
          // get from the db
          this.sessionService.getSessionById(id)
            .subscribe((session) => this.session = session);
      } else {
          // post new
          this.session = {
              id: 0,
              name: 'Starter Name',
              location: 'Miles U',
              startTime: '2018-11-22T15:00:00.000Z',
              createdAt: '',
              updatedAt: '',
          }; // new session end
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
    this.sessionService.save(this.session)
        .subscribe((session) => {
        this.router.navigate(['sessions']);
        });
  } // save end

  private formValid(): boolean {
    return this.session.name && this.session.location ? true : false;
  } // formValid end

  cancel(): void {
    this.router.navigate(['sessions']);
  } // cancel end
} // class end
