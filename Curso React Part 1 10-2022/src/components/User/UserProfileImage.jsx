import profileImg from '../../assets/defaultProfileImage.png';
import styles from './styles.module.scss';
import { UserName } from './UserName';
export const UserProfileImage = ({ profileImgUri, userName }) => {
  return (
    <div className={styles.userProfileImageContainer}>
      {!profileImgUri ? (
        <img src={profileImg} alt="Default user image" />
      ) : (
        <img src={profileImgUri} alt={userName} />
      )}
      {userName && <UserName>{userName}</UserName>}
    </div>
  );
};
