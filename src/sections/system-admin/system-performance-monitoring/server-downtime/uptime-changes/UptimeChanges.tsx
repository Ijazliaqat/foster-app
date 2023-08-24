// import React from 'react'

// const UptimeChanges = () => {
//   return (
//     <div>UptimeChanges</div>
//   )
// }

// export default UptimeChanges

import { Box, Card, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export const UptimeChanges = () => {
  const theme = useTheme();
  const data = [
    {
      from: "01/11/2023  10:50:40 Am",
      to: "01/11/2023  10:50:40 Am",
      responseTime: "20 days",
      upTime: true,
    },
    {
      from: "01/11/2023  10:50:40 Am",
      to: "01/11/2023  10:50:40 Am",
      responseTime: "01 month",
      upTime: false,
    },
  ];

  const columns = [
    {
      accessorFn: (row: any) => row.from,
      id: "from",
      cell: (info: any) => (
        <Box display="flex" alignItems="center" justifyContent="center">
          {info.row.original.upTime ? (
            <ArrowCircleUpIcon
              color="success"
              style={{ marginRight: "10px" }}
            />
          ) : (
            <ArrowCircleDownIcon
              color="error"
              style={{ marginRight: "10px" }}
            />
          )}
          {info.getValue()}
        </Box>
      ),
      header: () => <span>From</span>,
    },
    {
      accessorFn: (row: any) => row.to,
      id: "to",
      cell: (info: any) => info.getValue(),
      header: () => <span>To</span>,
    },
    {
      accessorFn: (row: any) => row.responseTime,
      id: "responseTime",
      cell: (info: any) => info.getValue(),
      header: () => <span>Response Time</span>,
    },
  ];

  return (
    <Card
      sx={{
        py: 1,
        px: 0,
        mt: "15px",
        background:
          theme.palette.mode === "light"
            ? "white !important"
            : "#212B36 !important",
      }}
    >
      <CustomTable
        isSuccess
        data={data}
        columns={columns}
        isPagination={false}
      />
    </Card>
  );
};
