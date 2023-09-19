import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setAge(event.target.value);
  };

  const addUserHandler = event => {
    event.preventDefault();

    props.user({ username: username, age: age });

    setUsername('');
    setAge('');
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
