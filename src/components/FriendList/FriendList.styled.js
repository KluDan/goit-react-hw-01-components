import styled from 'styled-components';

export const FriendListBlock = styled.ul`
  padding-block: 20px;
  max-width: 300px;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendListBlockItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 300px;
  padding: 10px 15px;
  background-color: #f0f0f0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
