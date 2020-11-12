import data from './badania.json';
const getdata = () =>{

    let new_data = {sections:[]};

    const fixdata = () => {data.sekcje.map(section => {
        let current_section = {};
        current_section.section_title = section['tytul']
        current_section.labs = getRows(section.kolumny)
        new_data.sections.push(current_section)
    })}
  
    const getRows = (columns) => {
        let examines = [];

        columns.map(column => {
            let examine = {};
            for(const row of column) {

                if( row.typ === 'naglowek') {
                    if (Object.keys(examine).length !== 0) {
                        examines.push(examine)
                    }
                    examine = {};
                    examine['examines'] = [];
                    examine['title'] = row;
                }else {
                    examine['examines'].push(row)
                }
            }
            examines.push(examine)
        })
        return examines;
    }

    fixdata();
    return new_data;
}

export default getdata;