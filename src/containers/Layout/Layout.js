import React, { Component } from 'react';
import WineList from '../WineList/WineList'

import './Layout.css'

class Layout extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        ToolBar
        SideBar
        <div className='Content'>
          <WineList />
        </div>
      </div>
     );
  }
}
 
export default Layout;