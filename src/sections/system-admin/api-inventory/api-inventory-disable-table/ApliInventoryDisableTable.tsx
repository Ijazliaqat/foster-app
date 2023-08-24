import React from 'react'
import { useApliInventoryDisableTable } from './useApliInventoryDisableTable';
import CustomTable from "@root/components/Table/CustomTable";

const ApliInventoryDisableTable = () => {
  const { tableHeaderRefTwo, router, columns, TableData, theme } =
  useApliInventoryDisableTable();
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
  )
}

export default ApliInventoryDisableTable