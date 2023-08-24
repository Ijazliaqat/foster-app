import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import useHospitalizationTable from "./useHospitalizationTable";
import useHospitalizationForm from "./useHospitalizationForm";

const activepath =
  "/foster-child/health-medical-history/hospitalisation/actions";

const HospitalizationTable = (props: any) => {
  const { fosterChildId, hospitalizationId } = props;
  const { deleteHander } = useHospitalizationForm({});
  const columns = [
    
    {
      accessorFn: (row: any) => row.hospitalName,
      id: "hospitalName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Hospital Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.admissionDate,
      id: "AdmissionDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Admission Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dischargeDate,
      id: "DischargeDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Discharge Date</span>,
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
                    hospitalizationId: info.row.original.id,
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
                    hospitalizationId: info.row.original.id,
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
    hospitalizationdata,
    hospitalizationIserror,
    hospitalizationisLoading,
    hospitalizationisFetching,
    hospitalizationisSuccess,
    pageChangeHandler,
    setSearch,
  } = useHospitalizationTable();
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="hospitalization"
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
                data={hospitalizationdata?.data?.cc_hospitalisation_info ?? []}
                columns={columns}
                isLoading={hospitalizationisLoading}
                isFetching={hospitalizationisFetching}
                isError={hospitalizationIserror}
                isSuccess={hospitalizationisSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={hospitalizationdata?.data?.meta?.pages ?? 0}
                currentPage={hospitalizationdata?.data?.meta?.page ?? 1}
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

export default HospitalizationTable;
