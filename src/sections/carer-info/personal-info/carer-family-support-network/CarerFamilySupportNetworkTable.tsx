import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useCarerFamilySupportNetworkTable } from "./useCarerFamilySupportNetworkTable";

export default function CarerFamilySupportNetworkTable() {
  const {
    makePath,
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    columnsCarerFamilySupportNetwork,
  } = useCarerFamilySupportNetworkTable();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Existing Family Member Details"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/carer-info/personal-info/carer-family-support-network/add-family-support",
            })
          );
        }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columnsCarerFamilySupportNetwork}
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
