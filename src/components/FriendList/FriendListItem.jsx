import styles from './FriendListItem.module.css'

export const FriendListItem = ({ user:{id, avatar, name, isOnline}}) => {
  
    return (
        <li className={styles.item}>
            <span className={styles.status} style={isOnline ?
                { backgroundColor: "green" } : { backgroundColor: "tomato" }}>
            </span>
            <img className={styles.avatar} src={avatar} alt="User avatar"/>
            <p className={styles.name}>{ name }</p>
        </li>
  );
};


