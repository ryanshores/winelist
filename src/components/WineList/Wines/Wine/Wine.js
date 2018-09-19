import React from 'react';

import './Wine.css'

const wine = ({ wine, select }) => {
  const classes = `Wine ${wine.selected ? 'toggle' : null}`
  return ( 
    <div className={classes} onClick={() => select(wine)}>
      <p>
        <strong>{wine.name}</strong> - {wine.year}
      </p>
    </div>
   );
}
 
export default wine;