import React, { useRef } from "react";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import CustomTable from "@root/components/Table/CustomTable";
import { SELECTFILTERS, getFosterCarerListColumns } from "./";
import { useGetFosterCarerListQuery } from "@root/services/foster-carer-list/fosterCarerListApi";
import usePath from "@root/hooks/usePath";

const FosterCarerListTable = () => {
  const tableHeaderRef = useRef<any>();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { makePath } = usePath();
  const columnsFosterCarerList = getFosterCarerListColumns(makePath);
  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetFosterCarerListQuery({});

  const users = data?.data?.users;
  const meta = data?.data?.meta;

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Foster Carer List"
        searchKey="search"
        showSelectFilters
        selectFilters={SELECTFILTERS}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={users}
        columns={columnsFosterCarerList}
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
};

export default FosterCarerListTable;
