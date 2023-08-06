import { addAction } from "./redux/action";
import { store } from "./redux/store"

export default function Counter(){
const {dispatch,getState,subscribe}=store
// console.log(getState());

subscribe(()=>{
    console.log("hello");
})


const handleAdd=()=>{
    dispatch(addAction())
    console.log(getState());
}

    return (
        <div>
            <h1>Counter:{getState().counter}</h1>
            <button onClick={handleAdd}>add</button>
            
        </div>
    )
}