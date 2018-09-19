import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
  return (
    <li className="nav-item active">
      <NavLink className="nav-link" to={props.link}>{props.children}</NavLink>
    </li>
  )
}
 
export default navigationItem;