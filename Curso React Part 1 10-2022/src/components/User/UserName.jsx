import styles from './styles.module.scss';
export const UserName = ({ children, ...props }) => (
  <h1 className={styles.userName} {...props}>
    @{children}
  </h1>
);
