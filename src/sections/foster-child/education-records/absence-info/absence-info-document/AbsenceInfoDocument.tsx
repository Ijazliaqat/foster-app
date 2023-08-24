import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useAbsenceInfoDocument } from "./useAbsenceInfoDocument";
import { useState } from "react";

export const AbsenceInfoDocument = (prop: any) => {
  // const [params, setParams] = useState("");
  const {
    data,
    router,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    setPage,
    submitAbsenceInfoDocumentData,
    setSearchValue,
    listDeleteHandler,
  }: any = useAbsenceInfoDocument();

  return (
    <>
      <UploadDocuments
        readOnly={router?.asPath.split("/").pop() === "view"}
        searchParam={(data: any) => {
          setSearchValue(data.search);
          console.log(data, "search");
        }}
        tableData={data?.data?.absence_info_document}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        column={[
          "documentName",
          "documentType",
          "date",
          "uploadBy",
          "password",
        ]}
        modalData={(data: any) => {
          submitAbsenceInfoDocumentData(data);
        }}
        onPageChange={(page: any) => {
          setPage(() => (page - 1) * 10);
        }}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        onDelete={(data: any) => listDeleteHandler(data?.id)}
      />
    </>
  );
};
