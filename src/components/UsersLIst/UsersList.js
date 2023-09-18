import User from "../User/User";
import styles from './UsersList.module.css';

const UsersList = props => {
  if (props.users.length === 0) {
    return;
  }

  return (
    <ul className={styles['users-list']}>
      {props.users.map(user => (
        <User
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </ul>
  );
}
 
export default UsersList;