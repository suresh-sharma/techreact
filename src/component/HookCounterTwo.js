import React, { useState } from 'react'

function HookCounterTwo() {
    const initialState=0;
     const [count, setcounter] = useState(initialState)
    return (
        <div>
            <button onClick={()=>setcounter(initialState)}  >Reset</button>
            <button onClick={()=>setcounter(count +1)} >Counter :{count}</button>
        </div>
    )
}

export default HookCounterTwo
