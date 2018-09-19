import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fireDB from '../../firebase/firedb'

import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'

import './NewWine.css'

class WineForm extends Component {
  state = { 
    name: '',
    year: '',
    type: '',
    loading: false,
    message: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true})
    const newWine = {
      name: this.state.name,
      year: this.state.year,
      type: this.state.type
    };
    const valid = (this.validationHandler(newWine))
    if (!valid) {
      this.setState({loading: false, message: 'Please fill in all values!'});
      return;
    }
    this.submitWineHandler(newWine);
  }

  submitWineHandler = (newWine) => {
    fireDB.collection('winelist').add(newWine)
    .then(doc => {
      this.props.onAdd({
        ...newWine,
        id: doc.id
      });
      this.props.history.replace('/');
    })
    .catch(err => console.error(err));
  }

  validationHandler = (newWine) => {
    if (newWine.name !== '' && newWine.type !== '' && newWine.year !== '') {
      return true;
    } else {
      return false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  closeMessageHandler = () => {
    this.setState({message: null});
  }

  render() { 
    let form = (
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

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div>
        <Modal show={this.state.message} cancel={this.closeMessageHandler}>{this.state.message}</Modal>
        {form}
      </div>
    );
  }
}
 
export default withRouter(WineForm);