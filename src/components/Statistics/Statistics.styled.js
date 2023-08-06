import styled from 'styled-components';
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

export const StatisticsSection = styled.section`
  width: 400px;
  padding-block: 40px;
`;
export const StatisticsTitle = styled.h2`
  padding-block: 20px;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StatisticsListItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  color: #fff;
  background-color: ${getRandomColor};
`;
export const StatisticsListItemPercantage = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;
