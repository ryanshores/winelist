import React, { Component } from 'react';
import fireDB from '../../firebase/firedb'

import WineListType from '../../components/WineTypeList/WineListType'

class WineList extends Component {
  state = { 
    wines: [],
    adding: false
  }

  componentDidMount() {
    fireDB.collection('winelist').get()
    .then(response => {
      const wines = [];
      response.forEach(doc => {
        wines.push({
          id: doc.id,
          ...doc.data()
        })
      })
      this.setState({wines})
    })
    .catch(err => {
      console.error(err);
    })
  }

  addWineHandler = (wine) => {
    const wines = this.state.wines
    const updatedWines = [
      ...wines,
      wine
    ]
    this.setState({wines: updatedWines})
  }

  render() { 
    const wineTypes = this.state.wines
      .map(wine => wine.type)
      .filter((wine, index, wines) => {
        return wines.indexOf(wine) === index;
      });
    const wineTypeLists = wineTypes.map((type, index) => {
      const wines = this.state.wines.filter(wine => {
        return wine.type === type
      })
      return <WineListType type={type} wines={wines} key={index}/>
    })
    return ( 
      <div>
        {wineTypeLists}
      </div>
     );
  }
}
 
export default WineList;