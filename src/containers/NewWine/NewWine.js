import React, { Component } from 'react';
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
    this.props.onAdd(newWine);
    this.props.cancel();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit} className='NewWine'>
        <h4>Add a wine</h4>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Year:
          <input name="year" type="number" value={this.state.year} onChange={this.handleChange} />
        </label>
        <label>
          Type:
          <input name="type" type="text" value={this.state.type} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
     );
  }
}
 
export default WineForm;