import React from "react";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import useOutSchoolActivityList from "./useOutSchoolActivityList";

export const OutSchoolActivityList = () => {
  const {
    columnsChildExclusionInfoTableFuntion,
    data,
    router,
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    outOfSchoolActivityId,
    closeDeleteProfile,
    deleteOutOfSchoolActivityId,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    fosterChildId,
  } = useOutSchoolActivityList();
  return (
    <>
      <DeleteModel
        open={outOfSchoolActivityId}
        onDeleteClick={deleteOutOfSchoolActivityId}
        handleClose={closeDeleteProfile}
      />

      <Card>
        <TableHeader
          showAddBtn
          ref={tableHeaderRef}
          title="Out of School Activity Info"
          searchKey="search"
          onAdd={() => {
            router.push(
              `/foster-child/education-records/out-of-school-activity/new-out-of-school-activity-info?${fosterChildId}`
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          columns={columnsChildExclusionInfoTableFuntion}
          data={data?.data?.outOfSchoolActivity}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isError={isError}
          isFetching={isFetching}
          isLoading={isLoading}
          isPagination={true}
          totalPages={data?.data?.meta?.pages}
          currentPage={data?.data?.meta?.page}
        />
      </Card>
    </>
  );
};
