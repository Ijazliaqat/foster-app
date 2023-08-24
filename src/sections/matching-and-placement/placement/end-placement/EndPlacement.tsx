import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import { useEndPlacement } from "./useEndPlacement";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

// ================================================================

const EndPlacement = () => {
  const { theme, router, columns, SELECT_FILTERS, isDeleteModal, handleDeleteClose } = useEndPlacement();
  return (
    <Card sx={styles.card}>
      <TableHeader
        title="End Placement"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() => router.push("/placement/end/form")}
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
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
      {isDeleteModal && <DeleteModel open={isDeleteModal} handleClose={handleDeleteClose} />}
    </Card>
  );
};

export default EndPlacement;

// ============================================
const styles = {
  card: {
    px: 1,
    py: 2,
    "& .MuiStack-root .MuiButtonBase-root": { marginLeft: "20px" },
  },
};
