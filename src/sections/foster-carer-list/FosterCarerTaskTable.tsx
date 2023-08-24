import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import { columnsFosterCarerTask, dataFosterCarerTask } from ".";

const FosterCarerTaskTable = () => {
  const tableHeaderRef = useRef<any>();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        //   disabled={isLoading}
        title="Foster Carer Task"
        onChanged={headerChangeHandler}
        showAddBtn
        hideSearch
      />
      <CustomTable
        data={dataFosterCarerTask}
        columns={columnsFosterCarerTask}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        //   isLoading={isLoading}
        //   isFetching={isFetching}
        //   isError={isError}
        //   isSuccess={isSuccess}
        //   currentPage={meta?.page}
        //   totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
};

export default FosterCarerTaskTable;
