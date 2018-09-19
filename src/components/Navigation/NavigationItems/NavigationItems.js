import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {

    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavigationItem link='/' >List</NavigationItem>
            <NavigationItem link='/selection' >Selection</NavigationItem>
            <NavigationItem link='/new-wine' >Contribute</NavigationItem>
          </ul>
        </div>
    )
}
 
export default navigationItems;  