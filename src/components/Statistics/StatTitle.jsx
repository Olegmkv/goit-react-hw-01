import styles from './StatTitle.module.css'

const StatTitle = ({ title }) => {
  console.log(title);
  return (title.length > 0 && (<h2 className={styles.title} > { title }</h2>))}

export default StatTitle;