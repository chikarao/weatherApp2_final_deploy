import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    // same as having arrow function
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // bind to this same as having onFormSubmit = (event) => {}
  }

  onInputChange = (event) => {
    // all action handlers come with event
    // ************** need to be => function since its a callback and promise
    // callbacks that references this needs to be bournd bind(this)
    console.log(event.target.value);
    this.setState({ term: event.target.value });
    //this context becomes unclear in callback
    }

  onFormSubmit(event) {
    event.preventDefault();
    //prevents submit of input and rerender page on form tag

    //fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
    // clear state after saarching
  }

  render() {
    return (
      // in form, submit button, app thinks sending input to server
      // server kicks back to localhost
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
  // gives access to action fetchWeather to SearchBar
}

export default connect(null, mapDispatchToProps)(SearchBar);
