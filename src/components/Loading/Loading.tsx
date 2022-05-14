import styles from './Loading.module.scss'
import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className={styles.container}>
      <ReactLoading type='spin' color='#A593E0' />
    </div>
  )
}

export default Loading
