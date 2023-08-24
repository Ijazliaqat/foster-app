import React from "react";
import { retentionData } from "./index";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DataRetentionTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, border: "1px solid #000" }}
        aria-label="simple table"
      >
        <TableHead sx={{ border: "1px solid #000" }}>
          <TableRow>
            <TableCell>Type of Data</TableCell>
            <TableCell>Period of Retention</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {retentionData.map((row: any) => (
            <TableRow key={row.id} sx={{ border: "1px solid #000" }}>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell>{row.period}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataRetentionTable;
