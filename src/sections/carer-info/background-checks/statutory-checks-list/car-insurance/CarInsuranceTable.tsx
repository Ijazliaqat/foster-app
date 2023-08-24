import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useCarInsuranceTable } from "./useCarInsuranceTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const CarInsuranceTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    carInsuranceListIsloading,
    carInsuranceData,
    carInsuranceListIsfetching,
    carInsuranceListError,
    carInsuranceListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  } = useCarInsuranceTable();

  const columns = [
    {
      accessorFn: (row: any) => row.registrationNumber ?? "-",
      id: "registrationNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Register Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.insurerName ?? "-",
      id: "insurerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Insurance Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.policyNumber ?? "-",
      id: "policyNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Policy Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.validToDate ?? "-",
      id: "validToDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date of Allegation</span>,
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
                  "/carer-info/background-checks/statutory-checks-list/car-insurance",
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
                  "/carer-info/background-checks/statutory-checks-list/car-insurance",
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
        title="Car Insurance"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/car-insurance",
            query: { action: "add", fosterCarerId: fosterCarerId },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={carInsuranceData}
        columns={columns}
        isLoading={carInsuranceListIsloading}
        isFetching={carInsuranceListIsfetching}
        isError={carInsuranceListError}
        isSuccess={carInsuranceListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default CarInsuranceTable;
