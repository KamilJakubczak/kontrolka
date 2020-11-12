
import React from 'react';
const Searchrow = (props) => {
    return(
        
        
    <tr>
        <td>{props.children.id}</td>
        <td>{props.children.nazwa}</td>
        <td>
            <input type="checkbox" className="" id="customSwitch1"></input>
        </td>
    </tr>
     
    )
}

export default Searchrow;