import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface ISession {
  id: number;
  name: string;
  location: string;
  startTime: string;
  createdAt: string;
  updatedAt: string;
} // interface end

@Injectable()
export class SessionsService {
    constructor(
    private http: HttpClient,
  ) { }

  getSessions(): Observable<ISession[]> {
    return this.http.get<ISession[]>('http://localhost:3000/sessions');
  } // getSessions end

  getSessionById(id: number): Observable<ISession> {
    return this.http.get<ISession>(`http://localhost:3000/sessions/${id}`);
  } // getSessionById end

  save(session: ISession): Observable<ISession | number[]> {
    if (session.id) {
      return this.http.put<number[]>('http://localhost:3000/sessions', session);
    } else {
      return this.http.post<ISession>('http://localhost:3000/sessions', session);
    } // if end
  } // save end
} // class end
