import { FriendListItemState } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendListItemState state={isOnline}></FriendListItemState>
      <img src={avatar} alt="User avatar" width="48"></img>
      <p>{name}</p>
    </>
  );
};
