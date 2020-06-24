import { COUNT_USERS, LIST_USERS } from '../../constants/types';

const INITIAL_STATE = {
count : 0,
user: {},

}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case COUNT_USERS:
            return { ...state, count: action.payload.value };
        default:
            return state;
    }
}