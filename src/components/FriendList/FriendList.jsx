import styles from './FriendList.module.css'
// import data from './friends.json'
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friend}) => {
    return (
      <ul className={styles.friendlist}>
            {friend.map(item => ( 
                <FriendListItem user={ item } key={item.id} />
            ))}
     </ul>
  );
};

