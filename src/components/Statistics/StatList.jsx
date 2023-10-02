import styles from './StatList.module.css';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatList = ({ types }) => {
    return (
      <ul className={styles.statlist}>
            {types.map(type => (
              <li className={styles.item} key={type.id} style={{backgroundColor: getRandomHexColor(),}}>
                    <span className={styles.label}>{type.label}</span>
                <span className={styles.percentage}>{type.percentage}%</span>
            </li>
            ))}
        </ul>
    )
}

export default StatList;

