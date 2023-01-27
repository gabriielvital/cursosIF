import {
  IoHeart,
  IoHeartOutline,
  IoChatbubbleOutline,
  IoRepeatSharp,
  IoShareOutline,
} from 'react-icons/io5';
import styles from './styles.module.scss';
export const PostFooter = ({ totalLikes, totalRePosted, totalComments }) => {
  const LikesRender = () => {
    return !totalLikes ? <IoHeartOutline /> : <IoHeart />;
  };

  return (
    <div className={styles.postFooterContainer}>
      <div className={`${styles.iconContainer} ${styles.comment}`}>
        <IoChatbubbleOutline />
        {totalRePosted && <h3>{totalRePosted}</h3>}
      </div>
      <div className={`${styles.iconContainer} ${styles.rePost}`}>
        <IoRepeatSharp />
        {totalComments && <h3>{totalComments}</h3>}
      </div>
      <div
        className={`${styles.iconContainer} ${
          !totalLikes ? styles.like : styles.liked
        } `}
      >
        <LikesRender />
        {totalLikes && <h3>{totalLikes}</h3>}
      </div>
      <div className={`${styles.iconContainer} ${styles.share}`}>
        <IoShareOutline />
      </div>
    </div>
  );
};
