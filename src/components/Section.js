import React from 'react';
import Column from './Column';

const Section = (props) => {
    return(
    <div className="card mt-3" >
        <div className="card-header">{props.children.tytul}</div>
        <div className="card-body">
        <Column>{props.children.kolumny}</Column>
        </div>
    </div>
     
    )
}

export default Section;