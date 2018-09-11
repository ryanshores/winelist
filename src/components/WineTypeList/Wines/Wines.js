import React from 'react';

import Wine from './Wine/Wine'

const wines = (props) => {
  const wines = props.wines.map((wine, index) => <Wine wine={wine} key={index}/>)
  return ( 
    <div>
      {wines}
    </div>
   );
}
 
export default wines;