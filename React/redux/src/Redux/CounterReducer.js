let initialState={
    count: 10
}

function CounterReducer(state=initialState,action){
    switch(action.type){
        case "increment":
            return {count:state.count+1};
        case "decrement":
            return {count:state.count-1};
        default:
            return state;
    }
}

export default CounterReducer;