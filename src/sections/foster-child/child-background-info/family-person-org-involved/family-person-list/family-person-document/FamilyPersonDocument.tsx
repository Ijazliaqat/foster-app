import React from "react";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useFamilyPersonDocument } from "./useFamilyPersonDocument";

export const FamilyPersonDocument = () => {
  const {
    data,
    router,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    setPage,
    setSearchValue,
    listDeleteHandler,
    submitFamilyPersonDocumentData,
  }: any = useFamilyPersonDocument();

  console.log(data);

  return (
    <>
      <UploadDocuments
        readOnly={router?.asPath.split("/").pop() === "view"}
        searchParam={(data: any) => {
          setSearchValue(data.search);
          console.log(data, "search");
        }}
        tableData={data?.data?.family_org_info_document}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        modalData={(data: any) => {
          console.log("data all the way here", data);
          submitFamilyPersonDocumentData(data);
        }}
        column={[
          "documentName",
          "documentType",
          "documentDate",
          "personName",
          "password",
        ]}
        onPageChange={(pageNo: any) => {
          setPage(() => (pageNo - 1) * 10);
        }}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        onDelete={(data: any) => {
          listDeleteHandler(data?.id);
          console.log("Deleting", data);
        }}
      />
    </>
  );
};
