import React from 'react';

import './Spinner.css'

const spinner = (props) => {
  return ( 
    <div>
      <div>Loading...</div>
      <div className='Loader'></div>
    </div>
   );
}
 
export default spinner;