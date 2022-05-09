import { UserIcon } from 'assets/svgs'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <strong className={styles.title}>Hello world!</strong>
        <p className={styles.subTitle}>Book your favorite movie</p>
      </div>
      <div className={styles.userProfileContainer}>
        <UserIcon width='70%' height='70%' />
      </div>
    </div>
  )
}

export default Profile
