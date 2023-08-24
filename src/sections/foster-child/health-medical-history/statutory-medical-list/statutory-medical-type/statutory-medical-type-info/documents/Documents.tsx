import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useDocuments } from "./useDocuments";

const Documents = () => {
  const {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    submitStatutoryMedicalListInfoDocumentData,
    router,
    onDeleteConfirm,
    STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT,
  }: any = useDocuments();

  return (
    <UploadDocuments
      readOnly={router.query?.action === "view"}
      tableData={data?.data?.statutory_medical_docs}
      isLoading={isLoading}
      column={[
        "documentName",
        "documentType",
        "documentDate",
        "uploadBy",
        "password",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        submitStatutoryMedicalListInfoDocumentData(data);
      }}
      searchParam={(data: any) => {
        setSearchValue(data.search);
      }}
      currentPage={data?.data?.meta?.page}
      totalPages={data?.data?.meta?.pages}
      onPageChange={(pageNo: any) => {
        setPage((pageNo - 1) * STATUTORYMEDICALLISTTYPEINFODOCUMENTPAGELIMIT);
      }}
      onDelete={(data: any) => onDeleteConfirm(data)}
    />
  );
};

export default Documents;
