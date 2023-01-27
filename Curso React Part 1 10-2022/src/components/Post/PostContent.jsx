import { UserName } from '../User/UserName';
import styles from './styles.module.scss';
export const PostContent = ({ postTitle, userName, type, ...props }) => {
  return (
    <div className={styles.postContentContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.postTitle}>{postTitle}</h1>
        <UserName style={{ marginLeft: 8 }}>{userName}</UserName>
      </div>
      <p className={styles.postContent}>{props.children}</p>
    </div>
  );
};
