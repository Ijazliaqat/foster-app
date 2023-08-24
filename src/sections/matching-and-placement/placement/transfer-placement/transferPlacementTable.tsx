import React from "react";
import { fosterCarerData } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useTransferPlacementTable } from "./useTransferPlacementTable";
import CustomTable from "@root/components/Table/CustomTable";

// ============================================================================================

const TransferPlacementTable = () => {
  const { transferPlacementColumns, theme, router, SELECT_FILTERS } = useTransferPlacementTable();
  return (
    <Card sx={styles.card}>
      <TableHeader
        title="Child Transfer Placement"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showAddBtn
        onAdd={() => router.push("/placement/transfer/placement-form")}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={fosterCarerData}
        columns={transferPlacementColumns}
        isLoading={false}
        showSerialNo={true}
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

export default TransferPlacementTable;

const styles = {
  card: {
    px: 2,
    py: 1,
    "& .MuiStack-root": {
      "& .MuiButtonBase-root": {
        ml: "15px",
      },
    },
  },
};
