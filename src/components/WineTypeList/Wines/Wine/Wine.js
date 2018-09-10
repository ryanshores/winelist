import React from 'react';

import './Wine.css'

const wine = (props) => {
  return ( 
    <div className='Wine'>
      <p>
        <strong>{props.wine.name}</strong> - {props.wine.year}
      </p>
    </div>
   );
}
 
export default wine;