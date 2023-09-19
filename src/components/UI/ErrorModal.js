import styles from './ErrorModal.module.css';

const ErrorModal = props => {
  return (
    <div id='overly' className={styles['modal__overly']} onClick={props.overly}>
      <div className={styles['modal__body']}>
        <div className={styles['modal__header']}>
          <p>Invalid input</p>
        </div>
        <div className={styles['modal__text']}>
          <p>{props.text}</p>
        </div>
        <div className={styles['modal__btn']}>
          <button type="button" onClick={props.okButtonClick} >Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
