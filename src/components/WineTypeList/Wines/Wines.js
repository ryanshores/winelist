import React from 'react';

import Wine from './Wine/Wine'

const wines = (props) => {
  const wines = props.wines.map(wine => <Wine wine={wine}/>)
  return ( 
    <div>
      {wines}
    </div>
   );
}
 
export default wines;