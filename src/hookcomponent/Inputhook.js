import {useState} from 'react'

function Inputhook(initialState) {
   const [value, setvalue] = useState(initialState)
   const reset=()=>{
       setvalue(initialState);
   }
   const bind={
    value,
    onChange: e=>{
        setvalue(e.target.value);
    }
   }
   return [value,bind,reset];
}

export default Inputhook;