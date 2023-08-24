import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef } from "react";
import { usePlacementsTable } from "./usePlacementsTable";

const PlacementsTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    annualReviewListIsloading,
    annualReviewData,
    annualReviewListIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  } = usePlacementsTable();

  const columns = [
    {
      accessorFn: (row: any) => row.childCode ?? "-",
      id: "childCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Code</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.age ?? "-",
      id: "age",
      cell: (info: any) => info.getValue(),
      header: () => <span>Age</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.athnicity ?? "-",
      id: "ethnicity",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ethnicity</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.legalStatus ?? "-",
      id: "legalStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Legal Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementType ?? "-",
      id: "placementType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.PlacementDate ?? "-",
      id: "placementDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dischargeDate ?? "-",
      id: "dischangeDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Dischange Date</span>,
      isSortable: true,
    },
  ];
  return (
    <Box sx={{ mt: 3 }}>
      <TableHeader ref={tableHeaderRefTwo} title="Placements" />
      <CustomTable
        data={annualReviewData}
        columns={columns}
        isLoading={annualReviewListIsloading}
        isFetching={annualReviewListIsfetching}
        isError={annualReviewListError}
        isSuccess={annualReviewListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Box>
  );
};

export default PlacementsTable;
