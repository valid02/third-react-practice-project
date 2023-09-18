import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UsersList from './components/UsersLIst/UsersList';
import Modal from './components/Modal/Modal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const userInputHandler = user => {
    if (user.username === '' || user.age === '') {
      setIsOpen(true);
      setModalText('please enter a valid name and age (non-empty values).');
    }
    else if (user.age < 0) {
      setIsOpen(true);
      setModalText('please enter a valid age (> 0).')
    }
    else {
      setUsers(prevUsers => {
        const updateUsers = [{ name: user.username, age: user.age, id: Math.random().toString() }, ...prevUsers];
        return updateUsers;
      });
      setIsOpen(false);
    }
  };

  const clickButtonHandler = () => {
    setIsOpen(false);
  }

  const ovarlyClickHandler = event => {
    if(event.target.id === 'overly') {
      setIsOpen(false);
    }
  }

  return (
    <div>
      <UserInput user={userInputHandler} />
      <UsersList users={users} />
      {isOpen && <Modal text={modalText} okButtonClick={clickButtonHandler} overly={ovarlyClickHandler} />}
    </div>
  );
};

export default App;
