import React from "react";
import { useChildUploadDocuemntInfoList } from "./useChildUploadDocuemntInfoList";
import { Grid } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import IsFetching from "@root/components/loaders/IsFetching";
import UploadDocsModel from "./upload-document-model/UploadDocsModel";
import UploadDocsUpdateViewForm from "./upload-document-model/upload-docs-update-view-form/UploadDocsUpdateViewForm";
import UploadDocsUpdateViewModel from "./upload-document-model/UploadDocsUpdateView";

const UploadDocuments = () => {
  const {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    setPage,
    therapInfoCon,
    openAddModel,
    closeAddModel,
    closeUpdateViewModel,
  }: any = useChildUploadDocuemntInfoList();
  const {
    someAsyncAction,
    docsAddModel,
    updateViewModel,
    updateViewModelDisabled,
    uploadFormDataHolder,
  } = therapInfoCon;
  return (
    <Grid sx={{ position: "relative" }}>
      <UploadDocsModel modelStatus={docsAddModel} closeModel={closeAddModel} />
      <UploadDocsUpdateViewModel
        modelStatus={updateViewModel}
        closeModel={closeUpdateViewModel}
        disabled={updateViewModelDisabled}
        defaultValue={uploadFormDataHolder}
      />
      {someAsyncAction && <IsFetching isFetching />}
      <TableHeader
        ref={tableHeaderRef}
        title="Uploaded Documents "
        searchKey="search"
        showAddBtn={true}
        onAdd={openAddModel}
        onChanged={(data: any) => {
          setSearchValue(data?.search);
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={data?.data?.therapy_info_document}
        columns={columns}
        isLoading={isLoading}
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages || 1}
        // onPageChange={(data: any) => {
        //   setPage(() => data);
        // }}
        onPageChange={(pageNo: any) => {
          setPage((pageNo - 1) * 10);
        }}
        onSortByChange={(data: any) => {
          // console.log("Sort by: ", data);
          return;
        }}
      />
    </Grid>
  );
};

export default UploadDocuments;
