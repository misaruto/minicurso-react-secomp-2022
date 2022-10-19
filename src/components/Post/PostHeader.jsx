import { UserName } from '../User/UserName';
import { UserProfileImage } from '../User/UserProfileImage';
import styles from './styles.module.scss';

const PostHeader = ({ postTitle, userProfileImageUri, userName }) => {
  return (
    <div className={styles.postHeaderContainer}>
      <div className={styles.postProfile}>
        <UserProfileImage profileImgUri={userProfileImageUri} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.postTitle}>{postTitle}</h1>
        <UserName>{userName}</UserName>
      </div>
    </div>
  );
};

export default PostHeader;
