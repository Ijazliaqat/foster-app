import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useMedicalAdvisorTable } from "./useMedicalAdvisorTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const MedicalAdvisorTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    medicalAdvisorData,
    medicalAdvisorError,
    medicalAdvisorIsloading,
    medicalAdvisorIsfetching,
    medicalAdvisorIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  } = useMedicalAdvisorTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.medicalAppoinmentDate ?? "-",
      id: "medicalAppoinmentDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Medical Appointment Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.receivedFromGPDate ?? "-",
      id: "receivedFromGPDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Received From Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.renewDate ?? "-",
      id: "renewDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Renew Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.receivedFromMedicalAdvisorDate ?? "-",
      id: "receivedFromMedicalAdvisorDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Received Date</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/background-checks/statutory-checks-list/medical-advisor",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/background-checks/statutory-checks-list/medical-advisor",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Medical Advisor"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/medical-advisor",
            query: { action: "add", fosterCarerId: fosterCarerId },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={medicalAdvisorData}
        columns={columns}
        isLoading={medicalAdvisorIsloading}
        isFetching={medicalAdvisorIsfetching}
        isError={medicalAdvisorError}
        isSuccess={medicalAdvisorIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default MedicalAdvisorTable;
