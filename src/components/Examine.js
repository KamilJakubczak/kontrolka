import React from 'react';

const Examine = (props) => {
    // console.log(props.children)
    return(
    // <div class="list-group-item">{props.children.nazwa}</div>
    // <p class="card-text">{props.children.nazwa}</p> 
    <ul class="list-group list-group-flush">
        {props.children.map(examine => {
        return <li class="list-group-item">{examine.nazwa}</li>
        })}
    </ul>
    )
}

export default Examine;