import React, { useState } from 'react';
import Arraylist from './Arraylist';
const Arrayelements = () =>{
    const list = [
        {
            id:1,
            name:"Dharshu",
            address:"Namakkal"
        },
        {
            id:2,
            name:"Poovitha",
            address:"Namakkal"
        },
    ];

        const [lists, setLists] = useState(list);

        const add = () => {
            setLists([
                ...list,
                {
                    id:3,
                    name:"Goobika",
                    address:"Namakkal"
                },
            ])
        };
    return(
        <>
           <h5>Array and Mapping</h5>
           <table>
               <thead>
                   <th>Name</th>
                   <th>Address</th>
               </thead>
               <tbody>
                  {list.map(m=> <Arraylist key={m.id} lists={m} />)}
               </tbody>
           </table>
           <button onClick={add}>Add</button>
        </>
    )
}
export default Arrayelements;