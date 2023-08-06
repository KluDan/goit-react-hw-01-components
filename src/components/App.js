import userInfo from '../user.json';
import statisticsData from '../data.json';
import friendsList from '../friends.json';
import transactions from '../transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile info={userInfo} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
