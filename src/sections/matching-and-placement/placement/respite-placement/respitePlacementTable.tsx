import React from "react";
import { fosterCarerData } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useRespitePlacementTable } from "./useRespitePlacementTable";
import CustomTable from "@root/components/Table/CustomTable";

// ============================================================================================

const RespitePlacementTable = () => {
  const { respitePlacementColumns, theme, router, SELECT_FILTERS } =
    useRespitePlacementTable();
  return (
    <Card sx={styles.card}>
      <TableHeader
        title="Child Respite"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showAddBtn
        onAdd={() => router.push("/placement/respite/placement-form")}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={fosterCarerData}
        columns={respitePlacementColumns}
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

export default RespitePlacementTable;

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
