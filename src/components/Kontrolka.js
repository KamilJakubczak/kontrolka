import { React, Fragment } from 'react';
import data from '../data/badania.json';
import Title from './Section';
import getdata from '../data/datafix'
const Kontrolka = () => {

    const new_data = getdata();

    // const new_data = data.sekcje.map((data) => {
    //          return <div>{data.tytul}</div>
    //         // {data.kolumny.map((data) => {
    //         //     <div>{data.type}</div>
    //         // })}
    // })

    return (
        <Fragment>
            {data.sekcje.map(data => {
                return <Title>{data}</Title>
            })}
        </Fragment>
    )
}
export default Kontrolka;