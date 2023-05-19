import { Action } from '@ngrx/store';

export const LOGOUT_USER = '[User] Logout';

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
}

export type Actions = LogoutUser;
