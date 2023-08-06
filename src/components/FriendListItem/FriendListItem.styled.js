import styled from 'styled-components';

const getBgColor = props => {
  return props.state ? 'green' : 'red';
};

export const FriendListItemState = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${getBgColor};
`;
