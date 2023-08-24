import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useSwotAnalysis } from "./useSwotAnalysis";
import { TableDemoData } from ".";

const SwotAnalysis = () => {
  const { columns, handleAction, router, path } = useSwotAnalysis();

  return (
    <>
      <TableHeader
        title="SWOT Analysis"
        searchKey="search"
        showSelectFilters
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: path,
            query: { action: "add" },
          });
        }}
      />
      <CustomTable
        data={TableDemoData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default SwotAnalysis;
