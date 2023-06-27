import {createStore} from'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';
const initial={counter:0,showstate:true}
createSlice({
    name:'counter',
    initialState:initial,
    reducers:{
        increment(state){
             state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
           state.counter= state.counter+action.amount
        },
        toggleCounter(state){
           state.showCounter=!state.showCounter
        }
    }
})
counterSlice.action.toggleCounter
const store=configureStore({
    counter:counterSlice.reducer
})
export default store;