import { useDocument } from "./useDocument";

import UploadDocuments from "@root/sections/documents/UploadDocuments";

const Document = () => {
  const {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    user,
    isFetching,
    submitInitialHomeVisitDocument,
    onDeleteConfirm,
  } = useDocument();

  return (
    <UploadDocuments
      readOnly={user?.defaultRole === "FOSTER_CARER"}
      tableData={data?.initialDocuments}
      isLoading={isLoading}
      column={[
        "documentName",
        "documentType",
        "documentDate",
        "personUploaded",
        "password",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        submitInitialHomeVisitDocument(data);
      }}
      searchParam={(data: any) => {
        setSearchValue(data.search);
      }}
      currentPage={data?.meta?.page}
      totalPages={data?.meta?.pages}
      onPageChange={(pageNo: any) => {
        setPage((pageNo - 1) * 10);
      }}
      onDelete={(data: any) => onDeleteConfirm(data)}
    />
  );
};

export default Document;
