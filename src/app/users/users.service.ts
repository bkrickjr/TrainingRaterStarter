import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IUser {
    id: number;
    name: string;
    signUpDate: string;
    sessionsCompleted: number;
    createdAt: string;
    updatedAt: string;
}

@Injectable()
export class UserService {
    constructor(
    private http: HttpClient,
    ) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('http://localhost:3000/users');
    }
}
