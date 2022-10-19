import styles from './styles.module.scss';
export const UserName = ({ children }) => (
  <h1 className={styles.userName}>@{children}</h1>
);
