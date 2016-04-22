import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Person.css';

class Person extends Component {
  state = {selected:false, volume:50, isVolMax:false, isVolMin:false, roomClass:'person'}

  roomClass = (selected) => {
    var roomClass = 'person ';
    if(selected === true) {
      roomClass = roomClass + 'selected';
    }
    return roomClass;
  }

  handleClick = () => {
    console.log("Clicked! " + this.props.name)
    var selected = this.state.selected;
    var newSelected = !selected
    var roomClass = this.roomClass(newSelected)
    this.setState({selected:newSelected, roomClass:roomClass})
  }

  changeVolume = (amt) => {
    console.log("Volume " + amt)
    var currVolume = this.state.volume;
    var newVolume = currVolume + amt
    var isVolMin = (newVolume === 0) ? true : false;
    var isVolMax = (newVolume === 100) ? true : false;
    this.setState({volume : newVolume, isVolMax:isVolMax, isVolMin:isVolMin})
  }

  getStyle = () => {
    return {
      width: this.state.volume + '%'
    }
  }


  render() {
    //var changeVolume = this.changeVolume
    var getStyle = this.getStyle

    var decVolume = () => {
      this.changeVolume(-10)
    }

    var incVolume = () => {
      this.changeVolume(10)
    }

    return (
      <span className={this.state.roomClass}>
        <button onClick={this.handleClick}>{this.props.name}</button>
        <button className="vol-control" onClick={decVolume} disabled={this.state.isVolMin}>-</button>
        <div className="pb-container">
          <div className="pb-progress" style={getStyle()}></div>
        </div>
        <button className="vol-control" onClick={incVolume} disabled={this.state.isVolMax}>+</button>
      </span>
    );
  }
}

export default Person;
