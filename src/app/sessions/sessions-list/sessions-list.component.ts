import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionsService, ISession} from '../sessions.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {
  sessions: ISession[] = [];
  constructor(
    private sessionsService: SessionsService,
    private router: Router
    ) { } // constructor end

  ngOnInit() {
    this.sessionsService.getSessions().subscribe(
      (sessions) => this.sessions = sessions
      );
  } // ngOnInit end

  goToAdd(): void {
    this.router.navigate(['sessions/add']);
  } // goToAdd end

  goToEdit(id: number): void {
    this.router.navigate([`sessions/${id}`]);
  } // goToEdit end
} // class end
