import {
  StatisticsList,
  StatisticsListItem,
  StatisticsListItemPercantage,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : null}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id}>
            <span>{stat.label}</span>
            <StatisticsListItemPercantage>
              {stat.percentage}%
            </StatisticsListItemPercantage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
