import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useEducationDocument } from "./useEducationDocument";

const EducationDocument = () => {
  const {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    submitEducationInfoDocument,
    query,
    onDeleteConfirm
  } = useEducationDocument();

  return (
    <UploadDocuments
      readOnly={query?.action === "view"}
      tableData={data?.data?.education_documents}
      isLoading={isLoading}
      column={[
        "documentName",
        "type",
        "documentDate",
        "uploadBy",
        "password",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        console.log("data all the way here", data);
        submitEducationInfoDocument(data);
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

export default EducationDocument;
