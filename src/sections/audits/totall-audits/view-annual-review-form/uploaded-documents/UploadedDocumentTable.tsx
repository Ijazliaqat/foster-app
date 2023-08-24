import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useUploadedDocumentTable } from "./useUploadedDocumentTable";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";

// ========================================================================

const UploadedDocumentTable = () => {
  const { theme, columns, isUploadModal, handleModalSubmit, handleModal } =
    useUploadedDocumentTable();

  return (
    <>
      <Card sx={styles.card}>
        <TableHeader
          title="Uploaded Documents"
          rootSX={{ overflowX: "scroll", mt: 0 }}
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data}
          showSerialNo={true}
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
          rootSX={{ my: theme.spacing(2), mt: 0 }}
        />
      </Card>
      <UploadDocumentModal
        open={isUploadModal}
        handleClose={handleModal}
        disabled={true}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};
export default UploadedDocumentTable;

// =============================================
const styles = {
  card: {
    px: 1,
    py: 2,
  },
};
