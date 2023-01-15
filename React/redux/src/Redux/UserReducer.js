let initialState={
    userState:"",
    loading:true
}

function UserReducer(state=initialState,action){
    switch(action.type){
        case "setUser":
            return {userState:JSON.stringify(action.payload),
                loading:false
            };
        case "setError":
            return {
                userState:action.payload,
                loading:false
            }
        default:
            return state;
    }
}

export default UserReducer;