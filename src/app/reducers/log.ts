import { ActionReducer, Action } from '@ngrx/store';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RESET = 'RESET';

export const logReducer: ActionReducer<string[]> = (state: string[] = [], action: Action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                action.payload
            ]

        case RESET:
            return [];

        default:
            return state;
    }
}