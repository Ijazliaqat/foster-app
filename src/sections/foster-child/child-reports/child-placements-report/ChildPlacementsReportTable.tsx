import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumnsChildPlacementsReport, data } from "./";

export default function ChildPlacementsReportTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsChildPlacementsReport(makePath);

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        title="Child Placement Reports"
        searchKey="search"
        onChanged={headerChangeHandler}
      />

      <CustomTable
        data={data}
        columns={columns}
        showSerialNo
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        // currentPage={meta?.page}
        // totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
