import React, { useState} from 'react'

function Hookcounter(){
    const [count, setcounter] = useState(0);
    return (
        <div>
            <button onClick={()=>setcounter(count+1)}>counter :{count}</button>
        </div>
    )
}

export default Hookcounter

