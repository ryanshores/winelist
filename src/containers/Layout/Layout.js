import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import fireDB from '../../firebase/firedb';

import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import WineList from '../../components/WineList/WineList'
import NewWine from '../NewWine/NewWine'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'

import './Layout.css'

class Layout extends Component {
  state = { 
    wines: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    this.getWineHandler();
  }

  closeModalHandler = () => {
    this.setState({error: false})
  }

  addWineHandler = (newWine) => {
    console.log(newWine);
    const wines = [...this.state.wines];
    wines.push(newWine);
    this.setState({wines});
  }

  getWineHandler = () => {
    this.setState({loading: true});
    fireDB.collection('winelist').get()
    .then(response => {
      const wines = [];
      response.forEach(doc => {
        wines.push({
          id: doc.id,
          selected: false,
          ...doc.data()
        })
      })
      this.setState({wines, loading: false});
    })
    .catch(err => {
      const error = {
        message: err
      };
      this.setState({loading: false, error});
    })
  }

  selectWineHandler = (selectedWine) => {
    // let selected = [...this.state.selected];
    // selected.push(wine);
    // selected = selected.filter((wine, index, self) => {
    //   return self.indexOf(wine) === index;
    // })
    // this.setState({selected})
    const wines = [...this.state.wines].map(wine => {
      if( wine.id === selectedWine.id ) {
        wine.selected = !wine.selected;
      }
      return wine;
    })
    this.setState({wines});
  }

  render() { 
    const selectedWine = this.state.wines.filter(wine => wine.selected)
    const selection = selectedWine.map(wine => {
      return (
        <p key={wine.id}>{wine.name}</p>
      )
    });

    let routes = (
      <main>
        <Route path='/' exact render={() => (
          <WineList 
            wines={this.state.wines} 
            select={this.selectWineHandler} 
            selected={this.state.selected}/>
        )} />
        <Route path='/selection' render={() => (
          <div>
            <h1>Selection</h1>
            {selection}
          </div>
        )} />
        <Route path='/new-wine' render={() => <NewWine onAdd={this.addWineHandler}/>} />
      </main>
    );

    if (this.state.loading) {
      routes = <Spinner />
    }

    return ( 
      <div>
        <ToolBar />
        <Modal show={this.state.error} cancel={this.closeModalHandler} >{this.state.error.message}</Modal>
        {routes}
      </div>
     );
  }
}
 
export default Layout;