import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import useNextOfKinTable from "./useNextOfKinTable";
import useNextOfKinForm from "./useNextOfKinForm";

const activepath = "/carer-info/other-information/next-of-kin/action";
const NextOFKin = () => {
  const {
    nextOfKinList,
    nextOfKinListMeta,
    nextOfKinIsloading,
    nextOfKinIsSuccess,
    nextOfKinIsFetching,
    nextOfKinIsError,
    setSearch,
    pageChangeHandler,
  } = useNextOfKinTable();
  const { deleteHander } = useNextOfKinForm({});
  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => `${row.firstName} ${row.lastName ?? "-"}`,
      id: "personName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Person Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.mobile,
      id: "contactNo",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Contact No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.nkRelation,
      id: "relationship",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Relationship</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>
      ),
      header: () => <span>date</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() => {
                deleteHander(info.row.original.id);
              }}
            />
            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: { action: "edit", id: info.row.original.id },
                });
              }}
            />

            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: { action: "view", id: info.row.original.id },
                });
              }}
            />
          </Box>
        );
      },
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: 2 }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Next of Kin"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {
                    setSearch(e.search);
                  }}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", id: "" },
                    });
                  }}
                />
              </Box>
              <CustomTable
                data={nextOfKinList}
                columns={columns}
                isLoading={nextOfKinIsloading}
                isFetching={nextOfKinIsFetching}
                isError={nextOfKinIsError}
                isSuccess={nextOfKinIsSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={nextOfKinListMeta?.pages ?? 0}
                currentPage={nextOfKinListMeta?.page ?? 1}
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

export default NextOFKin;
