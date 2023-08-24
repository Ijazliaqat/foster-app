import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import useMedicalAppointmentList from "./useMedicalAppointmentList";
import useMedicalAppointmentForm from "./useMedicalAppointmentForm";
import dayjs from "dayjs";

const activepath =
  "/foster-child/health-medical-history/medical-appointments/actions";

const MedicalAppointmentsTable = (props: any) => {
  const { fosterChildId } = props;
  const {
    MedicalAppointmentListdata,
    MedicalAppointmentListIserror,
    MedicalAppointmentListisLoading,
    MedicalAppointmentListisFetching,
    MedicalAppointmentListisSuccess,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  } = useMedicalAppointmentList({ fosterChildId: fosterChildId });
  const { deleteHander } = useMedicalAppointmentForm({});

  const columns = [
    {
      accessorFn: (row: any) => row.appointmentDate,
      id: "appointmentDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date Of Appointment/visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.doctorName,
      id: "doctorName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Doctor Name</span>,
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
                  query: {
                    action: "edit",
                    medicalAppointmentID: info.row.original.id,
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
                    medicalAppointmentID: info.row.original.id,
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
                  title="Medical Appointments"
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
                data={
                  MedicalAppointmentListdata?.data?.medicalappointmentlist ?? []
                }
                columns={columns}
                isLoading={MedicalAppointmentListisLoading}
                isFetching={MedicalAppointmentListisFetching}
                isError={MedicalAppointmentListIserror}
                isSuccess={MedicalAppointmentListisSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={MedicalAppointmentListdata?.data?.meta?.pages ?? 0}
                currentPage={MedicalAppointmentListdata?.data?.meta?.page ?? 1}
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

export default MedicalAppointmentsTable;
