import React, { Fragment } from 'react';
import Searchbar from './Searchbar'
import Searchtable from './Searchtable'

const Search = (props) => {
    return(
      <Fragment>
          <Searchbar />
          <Searchtable />
      </Fragment> 
     
    )
}

export default Search;