import {  useSelector,useDispatch } from "react-redux";
const Counter=()=>{
    const dispatch=useDispatch()
    const counter=useSelector(state=>state.counter)
    const states=useSelector(state=>state.showstate)
    const toggel=()=>{
      dispatch({type:'increment'})
    }
    const increse=()=>{
        dispatch({type:'increseby5',amount:5})
    }
    const decrement=()=>{
        dispatch({type:'decrements'})
    }
    const State=()=>{
        dispatch({type:'showState'})
    }
    return(
        <div>
            <h1>
                redux
            </h1>
           {states&&<div>{counter}
            <button onClick={increse}>by 5</button>
            <button onClick={toggel}>increment</button>
            <button onClick={decrement}>decrement</button></div>}
            <button onClick={State}>toggel</button>
        </div>
    )
}
export default Counter;
