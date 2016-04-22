import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './RoomList.css';
import Person from '../components/Person';
import Room from '../components/Room';
import us from 'underscore'

class RoomList extends Component {
  state = {selectedId:1, selectedLevel:"view"}

  onRoomClicked = (roomKey) => {
    console.log("Room " + roomKey + " clicked")
    var selectedLevel = "view"
    if(this.state.selectedId === roomKey) {
      selectedLevel = "joined"
    }

    this.setState({selectedId:roomKey, selectedLevel:selectedLevel})
  }

  roomClass = (id) => {
    console.log("Room " + id + " " + this.state.selectedId)
    var roomClass = 'room';
    if(this.state.selectedId === id) {
      roomClass = roomClass + ' ' + this.state.selectedLevel
    }
    return roomClass;
  }

  render() {
    console.log( this )
    var onRoomClicked = this.onRoomClicked
    var roomClass = this.roomClass
    var roomNodes = this.props.data.map(function(room) {
      return (
        <Room name={room.name} key={room.key} id={room.key} numPeopleHere={room.people.length} roomClass={roomClass(room.key)} onRoomClicked={onRoomClicked}>
        </Room>
      );
    });

    var _state = this.state;
    var currRoom = us.find(this.props.data, function(d) {
      return d.key === _state.selectedId
    });

    var personNodes = currRoom.people.map(function(person) {
      return (
        <Person name={person.name} key={person.id}>
        </Person>
      );
    });

    var personNodesMaybe = function() {
      if(personNodes && personNodes.length == 0) {
        return (
          <div className={styles.peopleList}>
            <span>Nobody is Here</span>
          </div>
        )
      } else {
        return (
          <div className={styles.peopleList}>
          {personNodes}
          </div>
        )
      }
    }();

    return (
      <div className="fullcontainer">
        <div className={styles.roomList}>
          {roomNodes}
        </div>
        {personNodesMaybe}
      </div>
    );
  }
}

export default RoomList;
