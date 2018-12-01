import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export interface ISessionRating {
} // interface end

@Injectable()
export class SessionRatingsService {
  // TODO remove this it is only here to pretend it is the db
  private ratings: ISessionRating[] = [];

    constructor(
    private http: HttpClient,
  ) { } // constructor end

  getAvgRating(sessionId: number): Observable<number> {
    return Observable.of(0);
  }

  getRatings(sessionId: number): Observable<ISessionRating[]> {
    return Observable.of([]);
  }

  save(rating: ISessionRating): Observable<ISessionRating> {
    return Observable.of(rating);
    // this.http.post
  } // save end
} // class end
