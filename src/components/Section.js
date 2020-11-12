import React from 'react';
import Column from './Column';

const Section = (props) => {
    return(
    <div className="card" >
        <div className="card-header">{props.children.tytul}</div>
        <div class="card-body">
        <Column>{props.children.kolumny}</Column>
        </div>
    </div>
     
    )
}

export default Section;