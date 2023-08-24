import {
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import React from "react";
import Image from "next/image";
import TableAction from "@root/components/TableAction";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { dummyFosterChid } from ".";
const FosterChildTasks = () => {
  const [Status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const columns = [
    {
      accessorFn: (row: any) => row?.taskName,
      id: "taskName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Task Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.priority,
      id: "priority",
      cell: (info: any) => {
        console.log(info.getValue());

        return (
          <Box>
            {info.getValue() === true && (
              <Box
                sx={{ display: "flex", gap: "5px", justifyContent: "center" }}
              >
                <ArrowUpwardOutlinedIcon sx={{ color: "#D30B0B" }} />
                <Typography variant="body1" sx={{ color: "#D30B0B" }}>
                  High
                </Typography>
              </Box>
            )}
            {info.getValue() === false && (
              <Box
                sx={{ display: "flex", gap: "5px", justifyContent: "center" }}
              >
                <ArrowDownwardOutlinedIcon sx={{ color: "#33BC03" }} />
                <Typography variant="body1" sx={{ color: "#33BC03" }}>
                  Low
                </Typography>
              </Box>
            )}
          </Box>
        );
      },
      header: () => <span>priority</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterChild,
      id: "fosterChild",
      cell: (info: any) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Image
            src={info.row.original.fosterChild}
            height={40}
            width={40}
            alt="icon"
          />
        </Box>
      ),
      header: () => <span>Foster Child</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => (
        <Box sx={{ minWidth: 50 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Status}
              label="status"
              onChange={handleChange}
            >
              <MenuItem value={"pending"}>pending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      ),
      header: () => <span>status</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <TableAction size="small" type="view" />
          </Box>
        );
      },
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Foster Child TASKS"
                  searchKey="search"
                />
              </Box>
              <CustomTable
                data={dummyFosterChid ?? []}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={true}
                showSerialNo={false}
                // totalPages={incidentlist?.data?.meta?.pages ?? 0}
                // currentPage={incidentlist?.data?.meta?.page ?? 1}
                // onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FosterChildTasks;
