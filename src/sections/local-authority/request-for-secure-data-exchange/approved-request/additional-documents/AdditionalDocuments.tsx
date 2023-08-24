import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useAdditionalDocuments } from './useAdditionalDocuments';
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";


const AdditionalDocuments = () => {
  const {
    router,
    TableData,
    columns,
    theme,
    openModal,
    setOpenModal,
  } = useAdditionalDocuments();
  return (
    <Box sx={{ width: "100%", padding: "10px" }}>
    <TableHeader
      title="Additional documents of the child"
      searchKey="search"
      showAddBtn
      onAdd={() => setOpenModal(true)}
      onChanged={(data: any) => {}}
    />
    <CustomTable
      data={TableData}
      columns={columns}
      isLoading={false}
      isFetching={false}
      isError={false}
      isPagination={false}
      isSuccess={true}
      currentPage={1}
      onPageChange={(data: any) => {
        console.log("Current page data: ", data);
      }}
      onSortByChange={(data: any) => {
        console.log("Sort by: ", data);
      }}
      rootSX={{ my: theme?.spacing(2) }}
    />

    <UploadDocumentModal
      open={openModal}
      handleClose={() => setOpenModal(false)}
      isHideSubmitButton={true}
    />
   
  </Box>
  )
}

export default AdditionalDocuments