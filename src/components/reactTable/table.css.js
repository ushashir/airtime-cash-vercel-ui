import styled from 'react-dom'

export const TableCss = styled.div`
  #table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #table td,
  #table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  /* #table tr:nth-child(even) {
    background-color: #f2f2f2;
  } */

  #table tr:hover {
    background-color: #ddd;
  }

  #table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.04);
    color: white;
  }
`;