import styles from './Statistics.module.css'
import data from './data.json';
import StatList from './StatList'
import StatTitle from './StatTitle'

export const Statistics = (props) => {
  return (
    <section className={styles.statistics}>
      <StatTitle title={props.title} />
      <StatList types={data} />
    </section>
  );
};
