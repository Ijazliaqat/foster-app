import React from "react";
import { useLicenceDisableTable } from "./useLicenceDisableTable";
import CustomTable from "@root/components/Table/CustomTable";

const LicenceDisableTable = () => {
  const { tableHeaderRefTwo, router, columns, TableData, theme } =
    useLicenceDisableTable();
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

export default LicenceDisableTable;
