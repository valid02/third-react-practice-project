import { useState } from 'react';
import styles from './UserInput.module.css';

const UserInput = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const changeUsernameHandler = event => {
    setUsername(event.target.value);
  }

  const changeAgeHandler = event => {
    setAge(event.target.value);
  }

  const submitFormHandler = event => {
    event.preventDefault();

    props.user({username: username, age: age});

    setUsername('');
    setAge('');
  }


  return ( 
    <div className={styles['input-box']}>
      <form onSubmit={submitFormHandler} >
        <div className={styles['input-box__control']}>
          <label>Username</label>
          <input type="text" value={username} onChange={changeUsernameHandler} />
          <label>Age (Year)</label>
          <input type='number' value={age} onChange={changeAgeHandler} />
        </div>
        <button type="submit" className={styles['input-box__btn']}>Add User</button>
      </form>
    </div>
  );
}
 
export default UserInput;