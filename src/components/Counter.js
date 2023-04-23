import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, INC_BY_VALUE } from '../redux/Types';
import { decrementAction, incrementAction, incrementByValue } from '../redux/CounterAction';

function Counter() {
      // const [count , setCount] = useState(0);
    const countState = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
    console.log(countState);
  return (
    <div>
        <h1>{countState}</h1>
        <button onClick={()=>(incrementAction(dispatch))}>Increment</button>
        <button onClick={()=>(decrementAction(dispatch))}>Decrement</button>
        <button onClick={()=>(incrementByValue(5 , dispatch))}>IncrementByVal</button>
    </div>
  )
}

export default Counter