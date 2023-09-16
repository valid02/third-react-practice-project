import { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UsersList from "./UsersLIst/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const userInputHandler = user => {
    setUsers(prevUsers => {
      const updateUsers = [{name: user.username, age: user.age, id: Math.random().toString()}, ...prevUsers];
      return updateUsers;
    });
  }

  return (
    <div>
      <UserInput user={userInputHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
