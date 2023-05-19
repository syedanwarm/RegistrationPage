import { Action } from '@ngrx/store';

export const REGISTER_USER = '[User] Register';

export class RegisterUser implements Action {
    readonly type = REGISTER_USER;

    constructor(public payload: any) { }
}

export type Actions = RegisterUser;



