import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardInfo,
  ProfileCardStats,
  ProfileCardStatsItem,
  ProfileCardStatsLabel,
  ProfileCardStatsValue,
  ProfileCardText,
  ProfileCardTitle,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({ info }) => {
  const statLabels = Object.keys(info.stats);
  return (
    <ProfileCard>
      <ProfileCardInfo>
        <ProfileCardAvatar src={info.avatar} alt="User avatar" />
        <ProfileCardTitle>{info.username}</ProfileCardTitle>
        <ProfileCardText>@{info.tag}</ProfileCardText>
        <ProfileCardText>{info.location}</ProfileCardText>
      </ProfileCardInfo>
      <ProfileCardStats>
        {statLabels.map(label => (
          <ProfileCardStatsItem key={label}>
            <ProfileCardStatsLabel>{label}</ProfileCardStatsLabel>
            <ProfileCardStatsValue>{info.stats[label]}</ProfileCardStatsValue>
          </ProfileCardStatsItem>
        ))}
      </ProfileCardStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  info: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};
