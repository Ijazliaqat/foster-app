import React from "react";
import { personalDataTable } from "./index";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PersonalTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, border: "1px solid #000" }}
        aria-label="simple table"
      >
        <TableHead sx={{ border: "1px solid #000" }}>
          <TableRow>
            <TableCell>Purpose/Activity</TableCell>
            <TableCell>Type of data</TableCell>
            <TableCell>
              {`Lawful basis for processing including basis of legitimate
              interest`}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personalDataTable.map((row: any) => (
            <TableRow key={row.id} sx={{ border: "1px solid #000" }}>
              <TableCell component="th" scope="row">
                {row?.purpose?.map((item: any) => (
                  <Box key={item.title} sx={{ lineHeight: "30px" }}>
                    {item.title}
                  </Box>
                ))}
              </TableCell>
              <TableCell>
                <Box
                  component="ol"
                  sx={{
                    listStyleType: "lower-alpha",
                    listStylePosition: "outside",
                    lineHeight: "30px",
                  }}
                >
                  {row?.dataType?.map((item: any) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </Box>
              </TableCell>
              <TableCell component="th" scope="row">
                <Box
                  component="ol"
                  sx={{
                    listStyleType: "lower-alpha",
                    listStylePosition: "outside",
                    lineHeight: "30px",
                  }}
                >
                  {row?.interest?.map((item: any) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonalTable;
