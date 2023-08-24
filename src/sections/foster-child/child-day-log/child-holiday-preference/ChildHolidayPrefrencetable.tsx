import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";

import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { dummy } from ".";
import useChildholidayPrefrenceTable from "./useChildholidayPrefrenceTable";
import useChildholidayPrefrenceFrom from "./useChildholidayPrefrenceFrom";
const activepath =
  "/foster-child/child-day-log/child-holiday-preference/actions";

const ChildHolidayPrefrencetable = (props: any) => {
  // PROPS
  const { fosterChildId } = props;
  //Api handler
  const {
    childHolidayList,
    childHolidayListIsLoading,
    childHolidayListIsSuccess,
    childHolidayListIsError,
    childHolidayListIsFetching,
    setSearch,
    headerChangeHandler,
    pageChangeHandler,
  } = useChildholidayPrefrenceTable({
    fosterChildId: fosterChildId,
  });
  const { deleteHander } = useChildholidayPrefrenceFrom({});
  //TABLE COLUMNS
  const columns = [
    {
      accessorFn: (row: any) => row.fromdate,
      id: "fromdate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>From Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.todate,
      id: "todate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>To Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reasonForHolidays,
      id: "reason",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Reason</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.comments,
      id: "comment",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Comments</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() =>deleteHander(info.row.original.id)}
            />

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
                  title="Holiday Ideas"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {
                    setSearch(e.search);
                  }}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", fosterChildId: fosterChildId },
                    });
                  }}
                />
              </Box>
              <CustomTable
                data={childHolidayList?.data?.child_holiday_prefrences ?? []}
                columns={columns}
                isLoading={childHolidayListIsLoading}
                isFetching={childHolidayListIsFetching}
                isError={childHolidayListIsError}
                isSuccess={childHolidayListIsSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={childHolidayList?.data?.meta?.pages ?? 0}
                currentPage={childHolidayList?.data?.meta?.page ?? 1}
                onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChildHolidayPrefrencetable;
