import React from "react";
import { fosterCarerData } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useFosterCarerTable } from "./useFosterCarerTable";
import CustomTable from "@root/components/Table/CustomTable";

// ============================================================================================

const FosterCarerTable = () => {
  const { fosterCarerColumns, theme, SELECT_FILTERS } = useFosterCarerTable();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title=" Foster Carer List"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={fosterCarerData}
        columns={fosterCarerColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
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
    </Card>
  );
};

export default FosterCarerTable;