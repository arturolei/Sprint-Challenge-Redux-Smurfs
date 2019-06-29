import React, {Component} from 'react';
import './SmurfComponents.css';

class SmurfForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }
  
    addSmurf = event => {
      event.preventDefault();
      this.props.addSmurf(this.state);
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    
    }
  
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div className="smurf-form-container">
          <form className="smurf-form" onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add Smurf to the Village</button>
          </form>
        </div>
      );
    }
  }
  
  export default SmurfForm;