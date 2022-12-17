import React, { useState } from 'react';
import './App.css';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';
import MessagePopUp from "./components/MessagePopUp/MessagePopUp";


const dummy = [
    { id: Math.random().toString(36).substr(2, 16), userName: 'changju', age: 20 },
    { id: Math.random().toString(36).substr(2, 16), userName: 'yunsung', age: 35 },
    { id: Math.random().toString(36).substr(2, 16), userName: 'sunyong', age: 19 },
    { id: Math.random().toString(36).substr(2, 16), userName: 'donald', age: 49 }
];

function App() {
    const [users, setUsers] = useState([]);
    const [isPopUp, setIsPopUp] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');

    const removeUserHandler = (userId) => {
        setUsers(prev => prev.filter(user => user.id !== userId));
    }

    const addUserHandler = (userInfo) => {
        setUsers(prevUsers => [userInfo, ...prevUsers]);
    }

    const closePopUpHandler = () => {
        setIsPopUp(false);
        setPopUpMessage('');
    }

    const openPopUpHandler = (message) => {
        setIsPopUp(true);
        setPopUpMessage(message);
    }

    return (
          <div className="App">
              <NewUser onAddUser={addUserHandler} onOpenPopUp={openPopUpHandler} />
              <Users users={users} onRemoveUser={removeUserHandler} />
              {isPopUp && <MessagePopUp popUpMessage={popUpMessage} onClosePopUp={closePopUpHandler} />}
          </div>
    );
}

export default App;
