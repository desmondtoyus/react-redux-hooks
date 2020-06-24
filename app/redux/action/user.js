
import { COUNT_USERS, LIST_USERS } from '../../constants/types';

//   export const changeAuthInput = ( name, value ) => dispatch => {
//     const payload = { name, value }
//     dispatch({ type: COUNT_USERS, payload });
//   };

export const increaseCount = ( value ) => dispatch => {
    const payload = { value }
    dispatch({ type: COUNT_USERS, payload });
  };