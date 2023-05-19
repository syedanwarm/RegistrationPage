import { Action } from '@ngrx/store';
import { REGISTER_USER } from './registerUser.action';
import { LOGOUT_USER } from './logOutUser.actions'

export interface UserState {
    users: any[];
}

export const initialState: UserState = {
    users: []
};

export function userReducer(state = initialState, action: any): UserState {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
}
