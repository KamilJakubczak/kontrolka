
import React from 'react';

const Title = (props) => {
    // console.log(props.children)
    const my_style = {
        color: props.children.kolor
    }
    return(   
       <div><h6 
        className="card-subtitle mb-2"
        style={my_style}>{props.children.tytul}</h6></div>
    //    <div className='title'>{props.children.tytul}</div>
    )
}

export default Title;