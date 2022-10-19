import { PostContent } from './PostContent';
import PostHeader from './PostHeader';
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
  } = post;
  return (
    <div className={styles.postContainer}>
      <PostHeader
        postTitle={postTitle}
        userProfileImageUri={uri}
        userName={userName}
      />
      <PostContent type={type}>{content}</PostContent>
    </div>
  );
};

export default Post;
