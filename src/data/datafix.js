import data from './badania.json';
const getdata = () =>{

    let badanie = {};
    let new_data = {sections:[]};

    console.log(data);
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
    // for(const examine of details) {
    //     if(examine.typ ==='naglowek') {                
    //         if (Object.keys(badanie).length !== 0) {
    //             console.warn(badanie)
    //             badania.push(badanie)
    //         }
    
    //         badanie = {};
    //         badanie['title'] = examine;
    //         badanie['examines'] = [];
    //     } else {
    //         badanie['examines'].push(examine);
    //     }
    // }
    console.log(new_data)
}

export default getdata;