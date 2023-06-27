import { CombinedState, combineReducers } from "redux";
import Counter from "./counter";
import Islogged from "./isLoggedIn,js";
const store=combineReducers({
    islogg:Islogged,
    Counters:Counter,
})