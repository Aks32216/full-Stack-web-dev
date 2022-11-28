let initialState={
    bat:10
}

function CounterReducer2(state=initialState,action){
    switch(action.type){
        case "buy":
            return {bat:state.bat-action.payload};
        default:
            return state;
    }
}

export default CounterReducer2;