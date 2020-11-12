
import React from 'react';
import getdata from'../data/datafix';
import Searchrow from './Searchrow';
const Searchtable = (props) => {

    const data = getdata();
    const examines = (data) => {
      let all = [];
      let id = 1;
      data.sections.map(section => {
        section.labs.map(lab => {
          lab.examines.map(examine => {
            examine.id = id;
            all.push(examine)
            id += 1;
          })
        })
      })
      return all;
    }
    const all = examines(data)
    all.map(single => {
    })
    return(
        <table id="searchtable" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Badanie</th>
              <th scope="col">Akcja</th>
            </tr>
          </thead>
          <tbody>
              {all.map(single =>{
                return <Searchrow key={single.index} >{single}</Searchrow>
              })}
          </tbody>
      </table>
     
    )
}

export default Searchtable;