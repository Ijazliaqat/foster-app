import { Grid } from "@mui/material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import theme from "@root/theme";
import { columns } from "./SafeguardingTableColumnData";

// types
type TTable = {
  columns: any;
  data: any;
};

const SafeguardingTable = (props: TTable) => {
  const {
    data,
  } = props;
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            {columns?.map((headerItem: any, index: any) => {
              return (
                <StyledTableCell key={index}>
                  {headerItem.title}
                </StyledTableCell>
              )
            })}
          </TableRow>

        </TableHead>
        <TableBody>
          {data?.map((item: any, index: any) => (
            <TableRow
              className="table table-hover "
              key={index}
              sx={{
                borderBottom: "1px solid #DBDBDB",
              }}
            >
              {columns.map((col: any, key: any) => (
                <StyledTableCellBody key={key} dangerouslySetInnerHTML={{ __html: item[col.data] }}></StyledTableCellBody>
              ))}
            </TableRow>
          ))
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SafeguardingTable;

// STYLED COMPONENTS
const StyledTableCell = styled(TableCell)({
  borderBottom: "1px solid #DBDBDB",
  background: '#FFFFFF',
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "0.005em",
  color: '#000',
  "&:first-of-type": {
    width: "325px",
  },
});
const StyledTableCellBody = styled(TableCell)({
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.005em",
  color: '#1D1D1D',
});