import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";

import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { Dummy } from ".";
const activepath = "/foster-child/events-and-notification/complaints/actions";
interface IComplaintsProps {
  fosterChildId: string;
}
const ComplaintsTable = (props: IComplaintsProps) => {
  const { fosterChildId } = props;
  const columns = [
    {
      accessorFn: (row: any) => row.dateofComplaints,
      id: "dateofComplaints",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Date of Complaints</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Status,
      id: "Status",
      cell: (info: any) => <Box>{info.getValue() ?? "-"}</Box>,
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt onDeleteClick={() => {}} />

            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "edit",
                    childHolidayPrefrence: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "view",
                    childHolidayPrefrence: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
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
                  title="Complaints"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {}}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", fosterChildId: fosterChildId },
                    });
                  }}
                />
              </Box>
              <CustomTable
                data={Dummy ?? []}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={true}
                showSerialNo={true}
                //   totalPages={hospitalizationdata?.data?.meta?.pages ?? 0}
                //   currentPage={hospitalizationdata?.data?.meta?.page ?? 1}
                //   onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComplaintsTable;
