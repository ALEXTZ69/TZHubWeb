import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({

    providedIn: 'root'

})

export class AuthService {

    signIn(email: string, password: string): Observable<boolean> {

        // Here you would make an HTTP request to your server

        return of(true);

    }
}