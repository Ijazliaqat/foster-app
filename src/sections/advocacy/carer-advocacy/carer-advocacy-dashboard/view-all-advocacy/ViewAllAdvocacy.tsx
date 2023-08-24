import React from "react";
import { AllAdvocacyData } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useViewAllAdvocacy } from "./useViewAllAdvocacy";
import CustomTable from "@root/components/Table/CustomTable";

// ==================================================================================

const ViewAllAdvocacy = () => {
  const { AllAdvocacyColumns, theme } = useViewAllAdvocacy();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader title="All Advocacy" searchKey="search" />
      <CustomTable
        data={AllAdvocacyData}
        columns={AllAdvocacyColumns}
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
        rootSX={{ my: theme.spacing(2)}}
      />
    </Card>
  );
};

export default ViewAllAdvocacy;
