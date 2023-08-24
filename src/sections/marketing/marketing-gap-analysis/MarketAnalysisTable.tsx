import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useMarketAnalysisTable } from "./useMarketAnalysisTable";

// ========================================================================

const MarketAnalysisTable = () => {
  const { theme, columns, isModalOpen, router, handleCloseModal } = useMarketAnalysisTable();

  return (
    <>
      <Card sx={styles.card}>
        <TableHeader
          title="Auditors List"
          rootSX={{ overflowX: "scroll", mt: 0 }}
          searchKey="search"
          showSelectFilters
          showAddBtn={true}
          onAdd={() => router.push("/marketing/market-gap-analysis/add-swot-info")}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          showSerialNo={true}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2), mt: 0 }}
        />
      </Card>
    </>
  );
};
export default MarketAnalysisTable;

// =============================================
const styles = {
  card: {
    px: 1,
    py: 2,
  },
};
