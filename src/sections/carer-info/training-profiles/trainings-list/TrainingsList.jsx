import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import useTrainingsList from "./useTrainingsList";
import DeleteModel from "@root/components/modal/DeleteModel";
import { Card } from "@mui/material";

const TrainingsList = () => {
  const {
    columnsTrainingVerificationFuntion,
    trainingPRofileData,
    router,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    headerChangeHandler,
    tableHeaderRef,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    trainingProfileId,
    closeDeleteProfile,
    deleteTrainingProfile,
  } = useTrainingsList();
  return (
    <>
      <DeleteModel
        open={trainingProfileId}
        onDeleteClick={deleteTrainingProfile}
        handleClose={closeDeleteProfile}
      />

      <Card>
        <TableHeader
          showAddBtn
          ref={tableHeaderRef}
          disabled={isLoading}
          title="Training Profile"
          searchKey="search"
          onAdd={() => {
            router.push("/carer-info/training-profiles/new-trainings-profile");
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={trainingPRofileData}
          columns={columnsTrainingVerificationFuntion}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={meta?.page}
          totalPages={meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
};

export default TrainingsList;
