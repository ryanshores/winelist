import React, { Component } from 'react';
import fireDB from '../../../firebase/firedb'
import './NewWine.css'

class WineForm extends Component {
  state = { 
    name: '',
    year: '',
    type: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newWine = {
      name: this.state.name,
      year: this.state.year,
      type: this.state.type
    };
    fireDB.collection('winelist').add(newWine)
    .then(doc => {
      this.props.history.replace('/')
    })
    .catch(err => console.error(err));
  
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit} className='NewWine'>
        <h4>Add a wine</h4>
        <input 
          name="name" 
          type="text" 
          value={this.state.name} 
          onChange={this.handleChange} 
          placeholder='Name'
        />
        <input 
          name="type" 
          type="text" 
          value={this.state.type} 
          onChange={this.handleChange} 
          placeholder='Type'
        />
        <input 
          name="year" 
          type="text" 
          value={this.state.year} 
          onChange={this.handleChange} 
          placeholder='Year'
        />
        <input type="submit" value="Submit" />
      </form>
     );
  }
}
 
export default WineForm;