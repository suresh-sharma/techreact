import React from 'react'
import Inputhook from '../hookcomponent/Inputhook'

function Useform() {
  const [firstName,bindfirstName,resetfirstName]=Inputhook('');
  const [lastName,bindlastName,resetlastName]=Inputhook('');
 const submitHander=(e)=>{
     e.preventDefault();
   alert(`YOUR name is ${firstName} ${lastName}`);
   resetfirstName();resetlastName();

  }
    return (
        <div>
            <form  onSubmit={submitHander}>
             <label >First Name</label>
             <input {...bindfirstName}></input>
             <label >First Name</label>
             <input {...bindlastName}></input>
             <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Useform


