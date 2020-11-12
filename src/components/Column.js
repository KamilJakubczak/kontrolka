import { React, Fragment } from 'react';
import Title from './Title';
import Examine from './Examine';

const Column = (props) => {

    const my_style = {
        dysplay: 'flex',
    }
    let details = [];
    for(const group of props.children) {
        for(const detail of group){
            details.push(detail)
        }
    }
    let badania = [];
    let badanie = {};
    for(const examine of details) {
        if(examine.typ ==='naglowek') {                
            if (Object.keys(badanie).length !== 0) {
                // console.warn(badanie)
                badania.push(badanie)
            }
    
            badanie = {};
            badanie['title'] = examine;
            badanie['examines'] = [];
        } else {
            badanie['examines'].push(examine);
        }
    }
    // console.log(badania)
     return(
        <div className='examine-group'>
            <div style={my_style}>{badania.map(b => {
                 return <div>
                    <Title>{b.title}</Title>
                    <Examine>{b.examines}</Examine> 
                    </div>
            })}
            </div>

        </div>
    )

    // return(
    //     <div className='examine-group'>
    //         <div>{details.map(examine => {
    //             if(examine.typ ==='naglowek') {
    //                 return <Title>{examine}</Title>
    //             } else {

    //                 return <Examine>{examine}</Examine>
    //             }
    //         })}
    //         </div>

    //     </div>
    // )
}

export default Column;