import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useSanctionDocument } from "./useSanctionDocument";

const SanctionDocument = () => {
  const {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    submitSanctionDocument,
    query,
    onDeleteConfirm
  } = useSanctionDocument();

  return (
    <UploadDocuments
      readOnly={query?.action === "view"}
      tableData={data?.data?.sanctionDetailDocs}
      isLoading={isLoading}
      column={[
        "docName",
        "docType",
        "documentDate",
        "uploadedBy",
        "password",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        console.log("data all the way here", data);
        submitSanctionDocument(data);
      }}
      searchParam={(data: any) => {
        setSearchValue(data.search);
        console.log("Updated params: ", data);
      }}
      currentPage={data?.data?.meta?.page}
      totalPages={data?.data?.meta?.pages}
      onPageChange={(pageNo: any) => {
        setPage((pageNo - 1) * 10);
      }}
      onDelete={(data: any) => onDeleteConfirm(data)}
    />
  );
};

export default SanctionDocument;
