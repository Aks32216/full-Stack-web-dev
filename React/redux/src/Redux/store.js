import {createStore,combineReducers,applyMiddleware} from "redux";
import CounterReducer1 from "./CounterReducer1";
import CounterReducer2 from "./CounterReducer2";
import UserReducer from "./UserReducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    count:CounterReducer1,
    bat:CounterReducer2,
    user:UserReducer
});
let store=createStore(rootReducer,applyMiddleware(thunk));

export default store; 