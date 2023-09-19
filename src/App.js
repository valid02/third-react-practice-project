import { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers(prevUsers => {
      return [{ name: uName, age: uAge, id: Math.random().toString() }, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
