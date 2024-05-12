import React, { useState } from 'react';
import Arraylist from './Arraylist';
import { Link } from 'react-router-dom';

const Arrayelements = () => {
    const initialList = [
        
        {
            id: 1,
            name: "Dharshu",
            address: "Namakkal"
        },
        {
            id: 2,
            name: "Poovitha",
            address: "Namakkal"
        },
    ];

    const [list, setList] = useState(initialList);

    const array = () => {
        setList([
            ...list,
            {
                id: 3,
                name: "Goo",
                address: "Namakkal"
            }
        ]);
    };

    return (
        <>
            <h5>Array and Mapping</h5>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => (
                        <Arraylist key={item.id} lists={item} />
                    ))}
                </tbody>
            </table>
            <button onClick={array}>ADD</button>

            
        </>
    );
}

export default Arrayelements;
