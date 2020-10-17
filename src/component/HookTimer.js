import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer, settimer] = useState(0);
    var timerref=useRef();
    useEffect(()=>{
     timerref.current=setInterval(()=>{
         settimer(timer=>timer+1);
     },1000)
     return()=>{
         clearInterval(timerref.current);
     }
    },[])
    return (
        <div>
            <div>time : {timer}</div>
            <button onClick={()=> clearInterval(timerref.current)} >clear time</button>
        </div>
    )
}

export default HookTimer
