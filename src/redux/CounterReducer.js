import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./Types";

const counterReducer = (state = {count:0} , action)=>{
    switch(action.type){
        case INCREMENT : return {...state , count:state.count + 1}
        case DECREMENT : return {...state , count:state.count - 1};
        case INC_BY_VALUE : return {...state , count:state.count + action.payload};

        default : return state ;
    }
}

export default counterReducer;