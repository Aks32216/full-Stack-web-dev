import {createStore,combineReducers} from "redux";
import CounterReducer1 from "./CounterReducer1";
import CounterReducer2 from "./CounterReducer2";
const rootReducer=combineReducers({
    count:CounterReducer1,
    bat:CounterReducer2
});
let store=createStore(rootReducer);

export default store;