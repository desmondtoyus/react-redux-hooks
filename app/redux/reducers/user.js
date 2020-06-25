import { COUNT_USERS,  READ_USER, READ_USER_ERROR, RESET_REDUCERS,  INPUT_CHANGE } from '../../constants/types';

const INITIAL_STATE = {
count : 0,
error: false,
errorMgs:'',
id:0,
email: '',
name:'',
surname:''


}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case COUNT_USERS:
            return { ...state, count: action.payload.value };
        case READ_USER:
            return { ...state, name: action.payload.name, id: action.payload.id, surname: action.payload.surname};
        case READ_USER_ERROR:
            return { ...INITIAL_STATE, error: true, errorMgs: action.payload};
        case RESET_REDUCERS:
            return {...state, ...INITIAL_STATE}
        default:
            return state;
    }
}