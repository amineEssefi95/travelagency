import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FakeAuthService {

    currentUser: any;

    constructor(private _http: HttpClient, private router: Router) {}

    loginUser(username: string, password: string) {
        this.currentUser = {
            username: username,
            password: password
        };
        this.router.navigate(['/home']);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
