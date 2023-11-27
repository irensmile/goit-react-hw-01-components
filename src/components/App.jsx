
import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from '../data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';
import { TransactionHistory} from "./TransactionHistory/TransactionHistory";
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: '#E7EBF2'
      }}
    >
    
      
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
     
      <Statistics stats={data} title="Upload Stats" />

      <FriendList friends={friends} />
      
      <TransactionHistory transactions={transactions} />
      
    </div>
  );
};
