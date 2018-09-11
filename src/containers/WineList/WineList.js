import React, { Component } from 'react';
import WineListType from '../../components/WineTypeList/WineListType'
import Modal from '../../components/UI/Modal/Modal'
import NewWine from '../NewWine/NewWine'

class WineList extends Component {
  state = { 
    wines: [
      { name: 'The Good Stuff', year: '2015', type: 'Merlot' },
      { name: 'Fat Cab', year: '2015', type: 'Cabernet' },
      { name: 'Pinot Pinot', year: '2015', type: 'Pinot Niore' },
      { name: 'Dark Knight', year: '2014', type: 'Pinot Niore' }
    ],
    adding: false
   }

  addWineCancelHandler = () => {
    this.setState({adding: false})
  }

  addWineHandler = (wine) => {
    const wines = this.state.wines
    const updatedWines = [
      ...wines,
      wine
    ]
    this.setState({wines: updatedWines})
  }
  toggleAddWineHandler = () => {
    this.setState({adding: true})
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
        <button onClick={this.toggleAddWineHandler}>Add Wine</button>
        <Modal show={this.state.adding} cancel={this.addWineCancelHandler}>
          <NewWine onAdd={this.addWineHandler} cancel={this.addWineCancelHandler}/>
        </Modal>
        <h1>The Wine List</h1>
        {wineTypeLists}
      </div>
     );
  }
}
 
export default WineList;