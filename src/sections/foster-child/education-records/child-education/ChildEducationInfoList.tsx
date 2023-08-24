import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useChildEducationInfo } from "./useChildEducationInfo";
import { Card } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";

const ChildEducationInfoList = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    router,
    educationInfoTableColumns,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useChildEducationInfo();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title="Child Education Info"
        searchKey="search"
        showAddBtn
        onAdd={() =>
          router.push({
            pathname:
              "/foster-child/education-records/child-education/child-education-info",
            query: {
              ...(!!router?.query?.fosterChildId && {
                fosterChildId: router?.query?.fosterChildId,
              }),
            },
          })
        }
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={data?.data?.education_info}
        columns={educationInfoTableColumns}
        isLoading={isLoading}
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
      {isRecordSetForDelete && (
        <DeleteModel
          open={isRecordSetForDelete}
          handleClose={() => setIsRecordSetForDelete(false)}
          onDeleteClick={() => onDeleteConfirm?.()}
        />
      )}
    </Card>
  );
};

export default ChildEducationInfoList;
