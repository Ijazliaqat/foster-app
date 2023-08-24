import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useApprovedRequestTable } from "./useApprovedRequestTable";

const ApprovedRequestTable = () => {
  const { tableHeaderRefTwo, router, TableData, columns, theme , SELECT_FILTERS} =
    useApprovedRequestTable();
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        selectFilters= {SELECT_FILTERS}
        showSelectFilters={true}
        title="Secure Data Exhange Requests"
        searchKey="search"
        onChanged={(data: any) => {}}
      />
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
        // rootSX={{ my: theme?.spacing(2) }}
      />
    </>
  );
};

export default ApprovedRequestTable;
