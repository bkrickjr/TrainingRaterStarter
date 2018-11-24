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
  ) { }

  ngOnInit() {
      let id: string | number = this.route.snapshot.paramMap.get('sessionId');
      // tslint:disable-next-line:radix
      id = isNaN(parseInt(id)) ? 0 : parseInt(id);
      if (id) {
          // get from the db
          this.sessionService.getSessionById(id)
            .subscribe((session) => this.session = session);
      } else {
          // new
          this.session = {
              id: 0,
              name: 'Starter Name',
              location: 'Miles U',
              startTime: '',
              createdAt: '',
              updatedAt: '',
          };
      }
      console.log(this.session);
  }

  save(): void {
    this.sessionService.save(this.session)
        .subscribe((session) => console.log(session));
  }

  cancel(): void {
    this.router.navigate(['sessions']);
  }

}
