import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import TableHeader from "@root/components/TableHeader";
import { columns } from ".";
import { useCarerAddressTable } from "./useCarerAddressTable";

export function CarerAddressHistoryTable() {
  const {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    addressHistoryList,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
    listDeleteHandler,
  } = useCarerAddressTable();

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Carer Address History"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(
              "/carer-info/personal-info/carer-address-history/add-address-history"
            );
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={addressHistoryList}
          columns={columns(listDeleteHandler)}
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
      </Grid>
    </Grid>
  );
}
