import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useSanctionDetailsList } from "./useSanctionDetailsList";

const SanctionDetailsLists = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    router,
    sanctionDetailsTableColumns,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useSanctionDetailsList();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title="Sanction Details List"
        searchKey="search"
        showAddBtn
        onAdd={() =>
          router.push({
            pathname:
              "/foster-child/other-information/sanction-details-list/sanction-details",
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
        data={data?.data?.sanctionDetails}
        columns={sanctionDetailsTableColumns}
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

export default SanctionDetailsLists;
