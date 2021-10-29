import React, { useState, useEffect } from 'react'
import GameWindow from './GameWindow'
import Scoreboard from './Scoreboard'
import UserList from './UserList'
import Cable from 'actioncable';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SUBSCRIPTION, ADD_USERS, REMOVE_SUBSCRIPTION } from '../../Globals';

const Dashboard = () => {
  const [connection, setConnection] = useState(false);
  const currentUser = useSelector(state => state.sessions.currentUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const createSocket = () => {
      let cable = Cable.createConsumer('ws://localhost:3001/cable');
      const chatConnection = cable.subscriptions.create({
        channel: 'UsersChannel'
      }, {
        connected: async () => {
          chatConnection.send({ user_id: currentUser.id })
          dispatch({ type: ADD_SUBSCRIPTION, payload: { type: "users", subscription: chatConnection } })
        },
        received: async (resp) => {
          dispatch({ type: ADD_USERS, payload: resp.users })
        },
        disconnected: async () => {
          dispatch({ type: REMOVE_SUBSCRIPTION, payload: "users"})
        },
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
