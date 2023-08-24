import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { dummy } from ".";
const activepath =
  "/foster-child/child-reports/child-immunisation-details-report/actions";
const ChildImmunisationReportsTable = (props: any) => {
  const { fosterChildId } = props;
  const columns = [
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Child Name</span>,
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row.dateTimeOfOccurence,
      id: "dateTimeOfOccurence",
      cell: (info: any) => dayjs(info.getValue()).format("YYYY-MM-DD") ?? "-",
      header: () => <span>Date / Time of Occurence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.immunisationType,
      id: "immunisationType",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Immunisation Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: "createdDate",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdBY,
      id: "createdBY",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span> Created By</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={0.5}
          >
            <DeletePrompt />

            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "edit",
                    ChildImmunisationReportID: info.row.original.id,
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
                    ChildImmunisationReportID: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
            <TableAction size="small" type="print" />
            <TableAction size="small" type="share" />
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
                  title="CHILD IMMUNISATION REPORTS"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {
                    // setSearch(e.search);
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
                data={dummy ?? []}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={true}
                showSerialNo={true}
                // totalPages={OfstedNotificationdata?.data.meta?.pages ?? 0}
                // currentPage={OfstedNotificationdata?.data.meta?.page ?? 1}
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

export default ChildImmunisationReportsTable;
