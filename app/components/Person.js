import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Person.css';

class Person extends Component {
  handleClick = () => {
    console.log("Clicked! " + this.props.name)
  }

  render() {
    return (
      <span className={styles.person}>
        <button onClick={this.handleClick}>{this.props.name}</button>
        <span className={styles.numPeople}>{this.props.numPeopleHere}</span>
      </span>
    );
  }
}

export default Person;
