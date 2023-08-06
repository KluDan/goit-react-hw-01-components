import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
`;
export const TableHead = styled.thead`
  background-color: #87cefa;
  th {
    padding: 8px;
  }
  th:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  td {
    padding: 8px;
    text-align: center;
  }
  td:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
  td.type::first-letter {
    text-transform: uppercase;
  }
`;
