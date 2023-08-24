import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import useChildMedicationInfotable from "./useChildMedicationInfotable";
import useChildMedicationInfoForm from "./useChildMedicationInfoForm";
import dayjs from "dayjs";

const activepath =
  "/foster-child/health-medical-history/child-medication-info/actions";

const ChildMedicationInfotable = (prop: any) => {
  const { fosterChildId, ChildMedicationInfoId } = prop;
  const {
    childMedicationInfotabledata,
    childMedicationInfotableIserror,
    childMedicationInfotableisLoading,
    childMedicationInfotableisFetching,
    childMedicationInfotableSuccess,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  } = useChildMedicationInfotable({
    fosterChildId: fosterChildId,
  });
  const { deleteHander } = useChildMedicationInfoForm({});
  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.medicationName,
      id: "medicationName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Medication Name</span>,
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row.issuedDate,
      id: "dateIssued",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Date Issued</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() =>
                deleteHander(info.row?.original?.id, fosterChildId)
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
                    ChildMedicationInfoId: info.row.original.id,
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
                    ChildMedicationInfoId: info.row.original.id,
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
                  title="Child Medication Info"
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
                data={childMedicationInfotabledata?.childmedicationreport ?? []}
                columns={columns}
                isLoading={childMedicationInfotableisLoading}
                isFetching={childMedicationInfotableisFetching}
                isError={childMedicationInfotableIserror}
                isSuccess={childMedicationInfotableSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={
                  childMedicationInfotabledata?.data?.meta?.pages ?? 0
                }
                currentPage={
                  childMedicationInfotabledata?.data?.meta?.page ?? 1
                }
                onPageChange={pageChangeHandler}
                onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChildMedicationInfotable;
