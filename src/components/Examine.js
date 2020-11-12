import React from 'react';

const Examine = (props) => {
    return(
    <ul className="list-group list-group-flush">
        {props.children.map(examine => {
        return <li className="list-group-item" key={examine.nazwa}>{examine.nazwa}</li>
        })}
    </ul>
    )
}

export default Examine;