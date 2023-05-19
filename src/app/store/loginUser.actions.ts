import { Action } from '@ngrx/store';

export const LOGIN_USER = '[User] Login';

export class LoginUser implements Action {
    readonly type = LOGIN_USER;

    constructor(public payload: any) { }
}

export type Actions = LoginUser;
