import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import { increaseCount, readUser , resetReducers, changeInput, submitUser } from "../../redux/action/user";
import Wrapper from '../../components/wrapper';



const Home = ()=>{
    // setstate
const [counter, setCounter] = useState(0);
const dispatch = useDispatch();

// redux mapStateToProps

const user = useSelector(state => state.user);
// multiple props
// const { count, user } = useSelector(state => ({
//     user: state.user,
//     count: state.counter,
//   }), shallowEqual);

// like mapDispatchToProps 
// pluging into life cycle
useEffect(() => {
    // console.log('// pluging into life cycle');
    dispatch(readUser())

    // React performs the reset when the component unmounts
    return  ()=> {
        dispatch(resetReducers())
      };
// effect runs only when component mounts
  }, []);

  useEffect(() => {
   console.log('USE EFFECT TWO')

//    effect runs when user ID changes
  }, [user.id]);


  useEffect(() => {
    console.log('USE EFFECT COUNT')
 
 //    effect runs when count changes
   }, [user.count]);

   const handleSubmit =(e)=>{
       e.preventDefault();
       const {name, surname } = user;
    return dispatch(submitUser(name, surname))
   }
   const handleChange = (e, data) =>{
    return dispatch(changeInput(data.name, data.value))
   }
   const handleIncrease =(e, data)=>{
        e.preventDefault();
        const { count } = user;
        if (data.id === 'increment_reducer') {
            dispatch(increaseCount(count + 1))
            return;
        }
        setCounter(counter + 1)
   }

const { count, id, name, surname, error, errorMgs } = user;
return(
    <Wrapper title='React Redux Hooks'
            content='React Redux Hooks descriptions'
            url={process.env.APP_URL}>
        <div style={{margin:'50px'}}>
            {id &&  <div>User name: <Link to='/nowhere'>{`${name} ${surname}`} </Link></div>}
            <div>State Count: {counter}</div>
            <div>Redux Count: {count}</div>
            {/* SETTING STATE VALUE */}
            <Button basic color='red' id='increment_state' onClick={(e, data)=>handleIncrease(e, data)} content='INCREASE STATE COUNT' />
            {/* SETTING REDUX STATE */}
            <Button basic color='orange' id='increment_reducer' content='INCREASE REDUX COUNT' onClick={(e, data)=>handleIncrease(e, data)} />
<br/>
            <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleChange}
          />
          <Form.Input
            placeholder='Surname'
            name='surname'
            value={surname}
            onChange={handleChange}
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
        </div>
    </Wrapper>
)
}
export  default Home;