import { UserProfileImage } from '../User/UserProfileImage';
import { PostContent } from './PostContent';
import { PostFooter } from './PostFooter';
import styles from './styles.module.scss';
const Post = ({ user, post }) => {
  const {
    userName,
    userProfile: {
      picture: { uri },
    },
  } = user;

  const {
    title: postTitle,
    body: { type, content },
    information: postInfo,
  } = post;
  return (
    <article className={styles.postContainer}>
      <div className={styles.postProfile}>
        <UserProfileImage profileImgUri={uri} />
      </div>
      <div className={styles.postContentFooterContainer}>
        <PostContent postTitle={postTitle} userName={userName} type={type}>
          {content}
        </PostContent>
        <PostFooter {...postInfo} />
      </div>
    </article>
  );
};

export default Post;
