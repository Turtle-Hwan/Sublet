import RoomProfile from '../components/RoomProfile';
import Header from '../components/Header';
import React from 'react';
import * as makeTest from '../testdata/testdata.js'

const roomTempData = makeTest.makeTestData(); // This is a temporary data for testing

export default function Home() {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'auto',
    },
    roomContainer: {
      display: "grid",
      gridTemplateRows: "1fr ",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  };

  let rooms = roomTempData.map( (room) => {
    return (
      <RoomProfile
        room={room}
      />
    )
  });

  return (
    <div style={styles.container}>
        <Header />
      <div style={styles.roomContainer}>
        {rooms}
      </div>
    </div>
  );
}