import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation,
  useGetChildChronologyOfEventsUploadedDocumentsListQuery,
  usePostChildChronologyOfEventsUploadedDocumentsMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/DocumentsAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import DayLogJournalForm from "@root/sections/foster-child/child-day-log/day-log-journal-entries/DayLogJournalForm";

const BREADCRUMBS = (fosterChildId: any) => {
  return [
    {
      icon: <HomeIcon />,
      name: "Day Log Journal Entries List",
      href: `/foster-child/child-day-log/day-log-journal-entries?fosterChildId=${fosterChildId}`,
    },
    {
      name: "Day Log / Journal Entry",
      href: "",
    },
  ];
};

const PAGE_TITLE = "Day Log / Journal Entires";
DayLog.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function DayLog() {
  const router = useRouter();
  const { id, action, fosterChildId }: any = router.query;
  const [page, setPage] = useState(0);
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useGetChildChronologyOfEventsUploadedDocumentsListQuery({
      limit: 10,
      offset: page,
      id: id,
    });
  const [deleteUploadedDocument] = useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation();
  const [postUploadedDocument] = usePostChildChronologyOfEventsUploadedDocumentsMutation();
  const deleteDocument = async (queryArg: any) => {
    try {
      await deleteUploadedDocument(queryArg);

      enqueueSnackbar(`Document Delete Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  const uploadDocumentsHandler = async (postData: any) => {
    const formData = new FormData();
    formData.append("documentType", postData.documentType);
    formData.append("documentDate", postData.documentDate);
    formData.append("documentPassword", postData.password);
    formData.append("file", postData.chosenFile);
    formData.append("formName", "day_log");
    formData.append("recordId", id);
    try {
      const res: any = await postUploadedDocument({ addDocumentCcRequestDto: formData }).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      console.log(error);

      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE}
        breadcrumbs={BREADCRUMBS(fosterChildId)}
      />
      <HorizaontalTabs tabsDataArray={["Day Log / Journal Entries", "Documents"]}>
        <DayLogJournalForm />
        <UploadDocuments
          searchParam={(searchedText: string) => console.log("searched Value", searchedText)}
          tableData={data?.data?.foster_child_document}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          // onDelete={}
          onDelete={(data: any) => {
            deleteDocument(data.id);
          }}
          modalData={(data: any) => uploadDocumentsHandler(data)}
          onPageChange={(pageNo: any) => {
            setPage((pageNo - 1) * 10);
          }}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          disabled={!!id && (action === "add" || action === "edit") ? false : true}
        />
      </HorizaontalTabs>
    </>
  );
}
