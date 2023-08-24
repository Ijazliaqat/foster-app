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
import ChildMissingPlacementForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/child-missing-placement/ChildMissingPlacementForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

const BREADCRUMBS = (fosterChildId: any) => {
  return [
    {
      icon: <HomeIcon />,
      name: "Child Chronology of Events",
      href: `/foster-child/child-background-info/child-chronology-of-events?fosterChildId=${fosterChildId}`,
    },
    {
      name: "Child Missing Placement",
      href: "",
    },
  ];
};

const PAGE_TITLE = "Child Missing Placement";
ChildMissingPlacement.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildMissingPlacement() {
  const router = useRouter();
  const { id, action }: any = router.query;
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
    formData.append("formName", "child_missing_placement");
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
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
      />
      <HorizaontalTabs tabsDataArray={["Missing Placement", "Documents"]}>
        <ChildMissingPlacementForm />
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
