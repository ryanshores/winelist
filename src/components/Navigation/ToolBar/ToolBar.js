import React from 'react';
import { Link } from 'react-router-dom'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
  return ( 
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">The Wine List</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavigationItems/>
      </nav>
    </header>
   );
}
 
export default toolbar;