import styles from './UserInput.module.css';

const UserInput = () => {
  return ( 
    <div className={styles['input-box']}>
      <form>
        <div className={styles['input-box__control']}>
          <label>Username</label>
          <input type="text" />
          <label>Age (Year)</label>
          <input type='number' />
        </div>
        <button type="submit" className={styles['input-box__btn']}>Add User</button>
      </form>
    </div>
   );
}
 
export default UserInput;