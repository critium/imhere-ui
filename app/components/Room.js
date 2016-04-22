import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Room.css';

class Room extends Component {
  handleClick = () => {
    this.props.onRoomClicked(this.props.id);
  }

  render() {
    return (
      <span className={this.props.roomClass}>
        <button onClick={this.handleClick}>{this.props.name}</button>
        <span className="numPeople">{this.props.numPeopleHere}</span>
      </span>
    );
  }
}

export default Room;
