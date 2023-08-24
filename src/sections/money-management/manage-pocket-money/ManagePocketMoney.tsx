import React from "react";
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { managePocketMoneyData } from ".";

export const ManagePocketMoney = () => {
  return (
    <>
      <Paper elevation={4} sx={{ padding: 3 }}>
        <Typography variant="h6">Guide for Pocket Money Management</Typography>
        <Typography sx={{ color: "#0E918C", fontWeight: "600", mt: 2 }}>
          Financial Details - 2020/21
        </Typography>
        <Typography>
          Guidance for recommended pocket money rates (payable from household
          element for children in foster care) and savings
        </Typography>

        <Table sx={{ minWidth: 650, mt: 1, mb: 1 }}>
          <TableCell
            sx={{ border: "1px solid #000", fontWeight: "bold" }}
            align="center"
          >
            Age Range
          </TableCell>
          <TableCell
            sx={{ border: "1px solid #000", fontWeight: "bold" }}
            align="center"
          >
            Total Amount
          </TableCell>
          <TableCell
            sx={{ border: "1px solid #000", fontWeight: "bold" }}
            align="center"
          >
            Age Range
          </TableCell>

          <TableBody>
            {managePocketMoneyData.map((data: any, i: number) => (
              <TableRow key={i}>
                <TableCell sx={{ border: "1px solid #000" }} align="center">
                  {data.ageRange}
                </TableCell>
                <TableCell sx={{ border: "1px solid #000" }} align="center">
                  {data.totalAmount}
                </TableCell>
                <TableCell sx={{ border: "1px solid #000" }} align="center">
                  {data.tableData}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography sx={{ mb: 2 }}>
          Recommended personal allowance rates have been set with the
          expectation that children in foster care and residential care receive
          the same level of pocket money.
        </Typography>
        <h5>For More Info : </h5>
        <Link href="">
          https://derbyshirecaya.proceduresonline.com/p_cic_savings_money.html
        </Link>
      </Paper>
    </>
  );
};
