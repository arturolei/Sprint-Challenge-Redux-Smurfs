import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { getSmurfs, addSmurf} from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  
  addSmurf = smurf => {
    this.props.addSmurf(smurf);
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {( this.props.fetchingSmurfs || this.props.addingSmurf ) 
        && <p>STUFF IS LOADING. PLEASE WAIT</p>
        }
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm addSmurf={this.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  error: state.error,
})

export default connect(mapStateToProps,{getSmurfs,addSmurf})(App);
