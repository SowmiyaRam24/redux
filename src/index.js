import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './actions';

// STORE=globalized STORE
// ACTION=it describes what you want to do 
// REDUCER=is basically desc how your action transform the action into next state
// DISPATCH= this is the way we execte the action
// const increment=()=>{
//   return{
//     type:'increment'
//   }
// } 
// const decrement=()=>{
//   return{
//     type:'decrement'
//   }
// }
// const Counter=(state=0,action)=>{
//   switch(action.type){
//     case'increment':
//       return state+1
//     case 'decrement':
//       return state-1
//     default:
//       return state

//   }
// }
// const store=createStore(Counter)
// store.subscribe(()=>console.log(store.getState()))
// store.dispatch(increment())
// store.dispatch(decrement())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
