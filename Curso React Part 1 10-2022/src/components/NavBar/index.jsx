import styles from './syles.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}></div>
      <div className={styles.titleContainer}></div>
      <div className={styles.actionsContainer}></div>
    </nav>
  );
};
