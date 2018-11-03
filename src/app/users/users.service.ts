import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    usersMock = [ { Name: 'Brian Krick', SessionsCompleted: '0'},
    { Name: 'Future Brian Krick', SessionsCompleted: '1'},
    { Name: 'Even Further Future Brian Krick', SessionsCompleted: '3'}
    ];
    constructor() { }

    getUsers(): {}[] {
        return this.usersMock;
    }
}