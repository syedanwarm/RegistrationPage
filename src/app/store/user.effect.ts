import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthserviceService } from '../authservice.service';
import { LOGIN_USER, LoginUser } from './loginUser.actions';

@Injectable()
export class UserEffects {
    login$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType<LoginUser>(LOGIN_USER),
                tap((action) => {
                    const isLoggedIn = this.authService.login(action.payload.email, action.payload.password);
                    if (isLoggedIn) {
                        this.router.navigate(['/home']);
                    }
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private authService: AuthserviceService,
        private router: Router
    ) { }
}
