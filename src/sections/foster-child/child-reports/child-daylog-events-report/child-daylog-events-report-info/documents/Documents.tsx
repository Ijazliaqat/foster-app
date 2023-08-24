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
    submitAllegationInfoDocumentData,
    router,
    onDeleteConfirm,
    ALLEGATIONDOCUMENTPAGELIMIT,
  } = useDocuments();

  return (
    <UploadDocuments
      readOnly={router?.query?.action === "view"}
      tableData={data?.data?.alegationDocuments}
      isLoading={isLoading}
      column={[
        "documentOriginalName",
        "documentType",
        "documentDate",
        "personUploaded",
        "documentPassword",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        submitAllegationInfoDocumentData(data);
      }}
      searchParam={(data: any) => {
        setSearchValue(data.search);
      }}
      currentPage={data?.data?.meta?.page}
      totalPages={data?.data?.meta?.pages}
      onPageChange={(pageNo: any) => {
        setPage((pageNo - 1) * ALLEGATIONDOCUMENTPAGELIMIT);
      }}
      onDelete={(data: any) => onDeleteConfirm(data)}
    />
  );
};

export default Documents;
