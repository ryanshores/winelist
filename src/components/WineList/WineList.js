import React from 'react';

import Wines from './Wines/Wines'

const wineList = (props) => {
  console.log(props);

  const wineTypes = props.wines
    .map(wine => wine.type)
    .filter((wine, index, wines) => {
      return wines.indexOf(wine) === index;
    });

  const wineLists = wineTypes.map(type => {
    const winesOfThisType = props.wines.filter(wine => wine.type === type)
    return (
      <div key={type}>
        <h1>{type}</h1>
        <Wines wines={winesOfThisType} select={props.select} />
      </div>
    )
  });

  return ( 
    <div>
      {wineLists}
    </div>
   );
}
 
export default wineList;