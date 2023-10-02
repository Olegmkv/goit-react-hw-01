import { User } from './profile/User'
import  {Gluke}  from './profile/Gluke'
import  {Statistics}  from './Statistics/Statistics';
import data from './FriendList/friends.json'
import { FriendList } from './FriendList/FriendList';
import listTransaction from './TransactionHistory/transactions.json'
import{TransactionHistory} from './TransactionHistory/TransactionHistory'

const titleFirst = "Download image"

export const App = () => {
  return (
    <div>
      <User {...Gluke} />
      <Statistics title={titleFirst} />
      <FriendList friend={data} />
      <TransactionHistory transaction = {listTransaction} />
    </div>
  );
};

