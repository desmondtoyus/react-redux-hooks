import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increaseCount } from "../../redux/action/user";
import Wrapper from '../../components/wrapper';



const Home = ()=>{
    // setstate
const [counter, setCounter] = useState(0);

// pluging into life cycle
useEffect(() => {
    console.log('// pluging into life cycle');
  });
// redux mapStateToProps
const user = useSelector(state => state.user);

// multiple props
// const { count, user } = useSelector(state => ({
//     user: state.user,
//     count: state.counter,
//   }), shallowEqual);

// like mapDispatchToProps 
const dispatch = useDispatch();


const { count } = user;
return(
    <Wrapper title='React Redux Hooks'
            content='React Redux Hooks descriptions'
            url={process.env.APP_URL}>
        <div style={{margin:'50px'}}>
            <div>State Count: {counter}</div>
            <div>Redux Count: {count}</div>
            {/* SETTING STATE VALUE */}
            <button onClick={()=>setCounter(counter + 1)} > INCREASE STATE COUNT </button>
            {/* SETTING REDUX STATE */}
            <button onClick={()=>dispatch(increaseCount(count + 1))} > INCREASE REDUX COUNT </button>
        </div>
    </Wrapper>
)
}
export  default Home;