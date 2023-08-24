import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { dummy } from ".";
import ModelUploadDoc from "../../../../components/modal/uploadDoc/modelUploadDoc";
import useHospitalInfoList from "./useHospitalInfoList";
import useHospitalinfoListForms from "./useHospitalinfoListForms";

const activepath =
  "/foster-child/health-medical-history/hospital-info-list/actions";

function HospitalInfoListTable(props: any) {
  const { fosterChildId } = props;
  const {
    hospitalInfolistdata,
    hospitalInfolistIserror,
    hospitalInfolistisLoading,
    hospitalInfolistisFetching,
    hospitalInfolistisSuccess,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  } = useHospitalInfoList({
    fosterChildId: fosterChildId,
  });

  const { deleteHander } = useHospitalinfoListForms({});
  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.hospitalName,
      id: "hospitalName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Hospital Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.city,
      id: "city",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>City</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() =>
                deleteHander(info.row.original.id, fosterChildId)
              }
            />

            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "edit",
                    hospitalinfoId: info.row.original.id,
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
                    hospitalinfoId: info.row.original.id,
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
                  title="Hospital Info list"
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
                data={hospitalInfolistdata?.hospitalinfolist ?? []}
                columns={columns}
                isLoading={hospitalInfolistisLoading}
                isFetching={hospitalInfolistisFetching}
                isError={hospitalInfolistIserror}
                isSuccess={hospitalInfolistisSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={hospitalInfolistdata?.meta?.pages ?? 0}
                currentPage={hospitalInfolistdata?.meta?.page ?? 1}
                onPageChange={pageChangeHandler}
                onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HospitalInfoListTable;
