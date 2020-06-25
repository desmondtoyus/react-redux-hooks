import axios from 'axios';

import { COUNT_USERS, READ_USER, READ_USER_ERROR, RESET_REDUCERS, INPUT_CHANGE } from '../../constants/types';

export const changeInput = ( name, value ) => dispatch => {
  const payload = { name, value }
  dispatch({ type: INPUT_CHANGE, payload });
};

export const submitUser = (name, surname) => dispatch => {
  let obj = {name, surname };
  console.log('obj == ', obj);
  axios.put(`/api/user`, obj).then(response=>{
    console.log(response.data);
    dispatch({type: READ_USER, payload: response.data});
  })
  .catch(err=>{
    dispatch({type: READ_USER_ERROR, payload:err.response.data.msg });
  })
};

export const increaseCount = ( value ) => dispatch => {
    const payload = { value }
    dispatch({ type: COUNT_USERS, payload });
  };

  export const readUser = () => dispatch => {
    axios.get(`/api/user`)
    .then(response=>{
      console.log(response.data);
      dispatch({type: READ_USER, payload: response.data});
    })
    .catch(err=>{
      dispatch({type: READ_USER_ERROR, payload:err.response.data.msg });
    })
  };


  export const resetReducers = () => dispatch => {
    dispatch({ type: RESET_REDUCERS });
  };

  