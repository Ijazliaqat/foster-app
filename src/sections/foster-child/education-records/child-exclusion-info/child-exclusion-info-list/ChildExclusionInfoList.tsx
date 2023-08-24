import React from "react";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import useChildExclusionInfoList from "./useChildExclusionInfoList";

export const ChildExclusionInfoList = () => {
  const {
    columnsChildExclusionInfoTableFuntion,
    data,
    router,
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    childRecordId,
    closeDeleteProfile,
    deleteTrainingProfile,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    id,
  } = useChildExclusionInfoList();
  return (
    <>
      <DeleteModel
        open={childRecordId}
        onDeleteClick={deleteTrainingProfile}
        handleClose={closeDeleteProfile}
      />

      <Card>
        <TableHeader
          showAddBtn
          ref={tableHeaderRef}
          title="Child Exclusion Info"
          searchKey="search"
          onAdd={() => {
            router.push(
              `/foster-child/education-records/child-exclusion-info/new-child-exclusion-info?${id}`
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          columns={columnsChildExclusionInfoTableFuntion}
          data={data?.data?.exclusion_info}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isError={isError}
          isFetching={isFetching}
          isLoading={isLoading}
          isPagination={true}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={pageChangeHandler}
        />
      </Card>
    </>
  );
};
