
import React from 'react';

const Title = (props) => {
    const my_style = {
        fontWeight: 700
    }
    return(   
       <div className="mt-3"><h6 
        className="card-subtitle mb-2"
        style={my_style}>{props.children.tytul}</h6></div>
    )
}

export default Title;