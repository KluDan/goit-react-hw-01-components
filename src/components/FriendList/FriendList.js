import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListBlock, FriendListBlockItem } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBlock>
      {friends.map(friend => (
        <FriendListBlockItem key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendListBlockItem>
      ))}
    </FriendListBlock>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
