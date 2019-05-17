import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
