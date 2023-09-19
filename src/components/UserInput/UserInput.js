import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './UserInput.module.css';

const UserInput = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const changeUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const changeAgeHandler = event => {
    setAge(event.target.value);
  };

  const submitFormHandler = event => {
    event.preventDefault();

    props.user({ username: username, age: age });

    setUsername('');
    setAge('');
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={changeUsernameHandler} />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" value={age} onChange={changeAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;
