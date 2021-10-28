import React, { useState, useEffect } from 'react'
import GameWindow from './GameWindow'
import Scoreboard from './Scoreboard'
import UserList from './UserList'
import Cable from 'actioncable';

const Dashboard = () => {
  const [connection, setConnection] = useState(false);

  useEffect(() => {
    const createSocket = () => {
      let cable = Cable.createConsumer('ws://localhost:3001/cable');
      const chatConnection = cable.subscriptions.create({
        channel: 'UsersChannel'
      }, {
        connected: () => {},
        received: async (resp) => {
          console.log("resp", resp);
        }
      })
      // dispatch(setChatSubscription(chatConnection));
      setConnection(true);
    }
  
    if(!connection) {
      createSocket();
    }
  }, [])

  return (
    <div>
      <UserList />
      {/* <GameWindow />
      <Scoreboard /> */}
    </div>
  )
}

export default Dashboard
