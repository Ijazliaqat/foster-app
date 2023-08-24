import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useApiInventoryTable } from "./useApiInventoryTable";

const ApiInventoryTable = () => {
  const { tableHeaderRefTwo, router, columns, TableData, theme } =
  useApiInventoryTable();

  return (
    <>
      <CustomTable
        data={TableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
    </>
  );
};

export default ApiInventoryTable;
