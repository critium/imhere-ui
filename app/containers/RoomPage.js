import React, { Component, PropTypes } from 'react';
import RoomList from '../components/RoomList';

export default class RoomPage extends Component {

  render() {
    var roomData = [
      {key:1  , name:"cube farm"  , roomClass:"blue", people:[{id:1 , name:"James"}] } ,
      {key:2  , name:"blue room"  , roomClass:"", people:[]}    ,
      {key:3  , name:"blue room1" , roomClass:"", people:[]}    ,
      {key:4  , name:"blue room2" , roomClass:"", people:[]}    ,
      {key:5  , name:"blue room3" , roomClass:"", people:[{id:2 , name:"Sarah"}    , {id:3 , name:"Hector"} , {id:4 , name:"Javier"}]} ,
      {key:6  , name:"blue room4" , roomClass:"", people:[]}    ,
      {key:7  , name:"blue room5" , roomClass:"", people:[]}    ,
      {key:8  , name:"blue room6" , roomClass:"", people:[]}    ,
      {key:9  , name:"blue room7" , roomClass:"", people:[]}    ,
      {key:10 , name:"blue room8" , roomClass:"", people:[]}    ,
      {key:12 , name:"blue room9" , roomClass:"", people:[]}
    ];

    return (
      <RoomList data={roomData} />
    );
  }
};
