import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { ValueTransformer } from '@angular/compiler/src/util';

export interface ISessionRating {
  userId: number;
  sessionId: number;
  rating: number;
  createDate: Date;
} // interface end

@Injectable()
export class SessionRatingsService {
  // TODO remove this it is only here to pretend it is the db
  private ratings: ISessionRating[] = [];

    constructor(
    private http: HttpClient,
  ) { } // constructor end

  getAvgRating(sessionId: number): Observable<number> {
    const ratings = this.ratings
      // filter gets passed a function to tell the ratings if they should be included or not
      .filter(
        (ratingObj) => ratingObj.sessionId === sessionId
      ).map(  // now change the rating of type ISessionRating into just the number value of the rating
        (ratingObj: ISessionRating) => ratingObj.rating,
      );
      const sum = ratings.reduce((prev, current) => current += prev);
      const avg = sum / ratings.length;
    return Observable.of(avg);
  }

  getRatings(sessionId: number): Observable<ISessionRating[]> {
    const ratings = this.ratings
      // filter gets passed a function to tell the ratings if they should be included or not
      .filter(
        (rating) => rating.sessionId === sessionId
      );
    return Observable.of(ratings);
  }

  save(rating: ISessionRating): Observable<ISessionRating> {
    this.ratings.push(rating);
    return Observable.of(rating);
    // this.http.post
  } // save end
} // class end
