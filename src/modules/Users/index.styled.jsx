import { Table } from "antd";
import styled from "styled-components";

export const StyledTable = styled(Table)`
    .ant-table-content {
    background-image: url(bg/colors.png);
  }

  /* Style for the table header */
  .ant-table-thead > tr > th {
    background-color: none; /* Header background */
    color: #000000; /* Header text color */
  }

  /* Style for the table rows */
  .ant-table-tbody > tr > td {
    background-color: none; /* Row background */
  }

  /* Alternate row colors (striped effect) */
  .ant-table-tbody > tr:nth-child(odd) > td {
    background-color: none; /* Odd rows */
  }

  /* Hover effect for rows */
  .ant-table-tbody > tr:hover > td {
    background-color: none; /* Hover effect */
  }
`
export const StyledContainer = styled.div`
   background-image: url(bg/colors.png)!important;
`
 