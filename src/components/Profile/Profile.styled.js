import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 5px;
`;
export const ProfileCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 20px;
  padding-inline: 10px;
`;
export const ProfileCardAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
export const ProfileCardTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const ProfileCardText = styled.p`
  color: #d3d3d3;
  margin-bottom: 10px;
`;
export const ProfileCardStats = styled.ul`
  border-top: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  background-color: rgba(211, 211, 211, 0.3);

  li:not(:last-child) {
    border-right: 1px solid #d3d3d3;
  }
`;
export const ProfileCardStatsItem = styled.li`
  padding: 15px 5px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const ProfileCardStatsLabel = styled.span`
  ::first-letter {
    text-transform: uppercase;
  }
  color: #d3d3d3;
`;
export const ProfileCardStatsValue = styled.span`
  font-weight: bold;
`;
