import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import useOfstednotificationTable from "./useOfstednotificationTable";
import dayjs from "dayjs";
import useOfstedNotificationFrom from "./useOfstedNotificationFrom";
const activepath =
  "/foster-child/events-and-notification/ofsted-notification/actions";
const OfstedNotificationtable = (props: any) => {
  const { fosterChildId } = props;
  const { deleteHander } = useOfstedNotificationFrom({
    fosterChildId: fosterChildId,
  });

  const columns = [
    {
      accessorFn: (row: any) => row.dateOfIncident,
      id: "DateofIncident",
      cell: (info: any) =>
        dayjs(info.getValue()).format("YYYY-MM-DD, hh:mm") ?? "-",
      header: () => <span>Date of incident/Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "Status",
      cell: (info: any) => (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          {info.getValue() ?? "-"}
          {/* <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor="#23183D"
            color={"white"}
            borderRadius={"11px 11px 11px 11px"}
            width={45}
            height={30}
          >
            Draft
          </Box> */}
        </Box>
      ),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfDeath,
      id: "dateofDeath",
      cell: (info: any) => dayjs(info.getValue()).format("YYYY-MM-DD") ?? "-",
      header: () => <span>Date of Death</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.location,
      id: "Location",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Location</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() => deleteHander(info.row.original.id)}
            />

            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "edit",
                    OfstedNotificationID: info.row.original.id,
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
                    OfstedNotificationID: info.row.original.id,
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
  const {
    OfstedNotificationdata,
    OfstedNotificationIserror,
    OfstedNotificationisLoading,
    OfstedNotificationisFetching,
    OfstedNotificationisSuccess,
    headerChangeHandler,
    pageChangeHandler,
    setSearch,
    sortChangeHandler,
  } = useOfstednotificationTable();

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Ofsted Notification"
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
                data={OfstedNotificationdata?.data.en_ofsted_notification ?? []}
                columns={columns}
                isLoading={OfstedNotificationisLoading}
                isFetching={OfstedNotificationisFetching}
                isError={OfstedNotificationIserror}
                isSuccess={OfstedNotificationisSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={OfstedNotificationdata?.data.meta?.pages ?? 0}
                currentPage={OfstedNotificationdata?.data.meta?.page ?? 1}
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

export default OfstedNotificationtable;
