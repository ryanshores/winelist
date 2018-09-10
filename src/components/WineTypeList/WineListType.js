import React from 'react';

import Wines from './Wines/Wines'

const wineListType = (props) => {
  return ( 
    <div>
      <h1>{props.type}</h1>
      <Wines wines={props.wines}/>
    </div>
   );
}
 
export default wineListType;