import React, { useState, useEffect } from 'react'
import GameWindow from './GameWindow'
import Scoreboard from './Scoreboard'
import UserList from './UserList'
import Cable from 'actioncable';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USERS } from '../../Globals';

const Dashboard = () => {
  const [connection, setConnection] = useState(false);
  const currentUser = useSelector(state => state.sessions.currentUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const createSocket = () => {
      let cable = Cable.createConsumer('ws://localhost:3001/cable?user_id=' + currentUser.id);
      const chatConnection = cable.subscriptions.create({
        channel: 'UsersChannel'
      }, {
        connected: async () => {
        },
        received: async (resp) => {
          switch(resp.type) {
            case "connecting":
              dispatch({ type: ADD_USERS, payload: resp.users })
          }
        }
      })
      // dispatch(setChatSubscription(chatConnection));
      setConnection(true);
    }
  
    if(!connection) {
      createSocket();
    }
  }, [dispatch])

  return (
    <div>
      <UserList />
      {/* <GameWindow />
      <Scoreboard /> */}
    </div>
  )
}

export default Dashboard
