import { Card, Grid, MenuItem, Select } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { auditTrialsData } from ".";
import { useAuditLogs } from "./useAuditLogs";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";

const AuditLogs = () => {
  const {
    theme,
    fosterCarerFilter,
    handleFosterCarerFilter,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  } = useAuditLogs();

  const columns = [
    {
      accessorFn: (row: any) => row.no,
      id: "Sr. No.",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No.</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.name,
      id: "Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.eventName,
      id: "Event Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Event Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.eventTime,
      id: "Event Time",
      cell: (info: any) => info.getValue(),
      header: () => <span>Event Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.accountType,
      id: "Account Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.iPAddresss,
      id: "IP Address",
      cell: (info: any) => info.getValue(),
      header: () => <span>IP Address</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "Status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          type="delete"
          size="small"
          onClicked={() => setIsDeleteModalOpen(true)}
        />
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  console.log(fosterCarerFilter.selectTime);
  return (
    <>
      <Card sx={{ px: 3, py: 4 }}>
        <Grid container spacing={3} justifyContent={"center"}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select
              name="selectTime"
              placeholder="Select Time"
              value={fosterCarerFilter.selectTime?fosterCarerFilter.selectTime:'Select Time'}
              size="small"
              sx={{ width: "100%" }}
              onChange={(e: any) => handleFosterCarerFilter("selectTime", e)}
            >
              <MenuItem value="Select Time">Select Time</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select
              name="selectDate"
              value={fosterCarerFilter.selectDate?fosterCarerFilter.selectDate:'Select Date'}
              placeholder="Select Date"
              size="small"
              sx={{ width: "100%" }}
              onChange={(e: any) => handleFosterCarerFilter("selectDate", e)}
            >
              <MenuItem value="Select Date">Select Date</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select
              name="selectEventTime"
              value={fosterCarerFilter.selectEventTime?fosterCarerFilter.selectEventTime:'Select Event Name'}
              placeholder="Select Event Name"
              size="small"
              sx={{ width: "100%" }}
              onChange={(e: any) =>
                handleFosterCarerFilter("selectEventTime", e)
              }
            >
              <MenuItem value="Select Event Name">Select Event Name</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Select
              name="selectAccountType"
              value={fosterCarerFilter.selectAccountType?fosterCarerFilter.selectAccountType:'Select Account Type'}
              placeholder="Select Account Type"
              size="small"
              sx={{ width: "100%" }}
              onChange={(e: any) =>
                handleFosterCarerFilter("selectAccountType", e)
              }
            >
              <MenuItem value="Select Account Type">
                Select Account Type
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Card>
      {/* Table */}
      <Card sx={{ p: 2, mt: 2 }}>
        <TableHeader title="Foster Carer(s)" />
        <CustomTable
          data={auditTrialsData}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Card>
      <DeleteModel
        open={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};

export default AuditLogs;
