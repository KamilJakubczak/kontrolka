import { React } from 'react';
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
                badania.push(badanie)
            }
            badanie = {};
            badanie['title'] = examine;
            badanie['examines'] = [];
        } else {
            badanie['examines'].push(examine);
        }
    }
    return(
        <div className='examine-group'>
            <div style={my_style}>{badania.map(b => {
                return <div>
                    <Title key={b.title}>{b.title}</Title>
                    <Examine >{b.examines}</Examine> 
                    </div>
            })}
            </div>
        </div>
    )

}

export default Column;