import React, {useState} from 'react'

function HookCounterFour() {
    const [Item, setItem] = useState([]);
   const AddItem=()=>{
        setItem([
                    ...Item,{
                        Id:Item.length,
                        RankMark:Math.floor(Math.random() *10) +1
                    }
                ]);
    }
    return (
        <div>
            <button onClick={AddItem} >Add Item</button>
            <ul>
                {Item.map(item=>(
                    <li key={item.Id}>{item.RankMark}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFour
