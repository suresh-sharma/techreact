import React,{useState} from 'react'

function HookCounterThree() {
    let initialState={firstname:'',lastname:''};
    
    const [name, setname] = useState(initialState)
    return (
        <div>
            <form>
                <input type="text" onChange={(e)=>setname({...name,firstname: e.target.value})} ></input>
                <input type="text" onChange={(e)=>setname({...name,lastname: e.target.value})} ></input>
                <p>your first name : {name.firstname}</p>
                <p>your last name  : {name.lastname}</p>
                <div>name : {JSON.stringify(name)}</div>
            </form>
        </div>
    )
}

export default HookCounterThree
