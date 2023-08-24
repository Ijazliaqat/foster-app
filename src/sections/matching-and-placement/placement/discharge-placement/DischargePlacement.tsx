import React from "react";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useDischargePlacement } from "./useDischargePlacement";
import { data } from ".";

// ==============================================================

const DischargePlacement = () => {
  const { theme, router, columns, SELECT_FILTERS, isDeleteModal, handleDeleteClose } = useDischargePlacement();
  return (
    <Card sx={styles.card}>
      <TableHeader
        title="Child Discharge"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() => router.push("/placement/discharge/form")}
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

export default DischargePlacement;

// =============================================
const styles = {
  card: {
    px: 1,
    py: 2,
    '& .MuiStack-root .MuiButtonBase-root':{marginLeft:'20px'}
  },
};
