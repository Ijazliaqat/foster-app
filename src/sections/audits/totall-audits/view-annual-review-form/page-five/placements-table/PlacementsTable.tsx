import React from "react";
// import { data } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { usePlacementsTable } from "./usePlacementsTable";

// ========================================================================

const PlacementsTable = ({ data, title }: any) => {
  const { theme, columns } = usePlacementsTable();

  return (
    <>
      <Card sx={styles.card}>
        <TableHeader
          title={title}
          rootSX={{ overflowX: "scroll", mt: 0 }}
          hideSearch={true}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          isPagination={false}
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
export default PlacementsTable;

// =============================================
const styles = {
  card: {
    px: 1,
    py: 2,
  },
};
