import { React, Fragment } from 'react';
import data from '../data/badania.json';
import Title from './Section';
import Search from './Search'
const Kontrolka = () => {


    return (
        <Fragment>
            <Search />
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Dostępne badania</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {data.sekcje.map(data => {
                            return <Title key={data.tytul}>{data}</Title>
                        })}
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}
export default Kontrolka;