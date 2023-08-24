import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import { usePetQuestionnaireTable } from "./usePetQuestionnaireTable";
import dayjs from "dayjs";
import TableAction from "@root/components/TableAction";

export default function PetQuestionnaireTable() {
  const {
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    petQuestionnaire,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    makePath,
  } = usePetQuestionnaireTable();

  const columns = [
    {
      accessorFn: (row: any) => row.createdAt,
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Pet Questionnaire Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.inspectionDate,
      id: "inspectionDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Next Inspection Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.petQuestionnaire1?.nameOfAnimal,
      id: "nameOfAnimal",
      cell: (info: any) => info.getValue(),
      header: "Name Of Pet",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => (info.getValue() ? "Yes" : "No"),
      header: "Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/carer-info/personal-info/carer-chronology-of-events/pet-questionnaire",
                  queryParams: { petId: info.getValue() },
                })
              )
            }
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Pet Questionnaire List"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={petQuestionnaire}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
