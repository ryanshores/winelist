import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import WineList from '../WineList/WineList'
import NewWine from '../WineList/NewWine/NewWine'

import './Layout.css'

class Layout extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <ToolBar />
        <main>
          <Route path='/' exact component={WineList} />
          <Route path='/selection' render={() => <h1>Selection</h1>} />
          <Route path='/new-wine' component={NewWine} />
        </main>
      </div>
     );
  }
}
 
export default Layout;