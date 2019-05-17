import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addNewSmurfs } from '../actions';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewSmurfs(this.state.newSmurf)

    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  handleChanges = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    // console.log(this.props.smurfs)

    return (
      <div className="App">
        {this.props.smurfs && this.props.smurfs.map(oneSmurf => (
          <div key={oneSmurf.id}>
            <h1>{`Name: ${oneSmurf.name}`}</h1>
            <p>{`Age: ${oneSmurf.age}`}</p>
            <p>{`Height: ${oneSmurf.height}`}</p>
          </div>
        ))}
        <div>
          <h2>Add a New Smurf</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder='Name'
              name="name"
              value={this.state.newSmurf.name}
              onChange={this.handleChanges} />
            <input
              placeholder='Age'
              name="age"
              value={this.state.newSmurf.age}
              onChange={this.handleChanges} />
            <input
              placeholder='Height'
              name="height"
              value={this.state.newSmurf.height}
              onChange={this.handleChanges} />
            <button onClick={this.handleSubmit}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addNewSmurfs })(App);
