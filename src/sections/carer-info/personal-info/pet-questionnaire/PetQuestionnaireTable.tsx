import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import { usePetQuestionnaireTable } from "./usePetQuestionnaireTable";

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
    columns,
  } = usePetQuestionnaireTable();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Pet Questionnaire List"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/carer-info/personal-info/pet-questionnaire/add-pet-questionnaire",
            })
          );
        }}
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
