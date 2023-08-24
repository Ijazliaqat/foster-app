// import React from "react";

// export default function RiskAssessment() {
//   return <div>RiskAssessment</div>;
// }

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
// import RAChildDetailsForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/risk-assessment/RAChildDetailsForm";
// import RAChildInformationForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/risk-assessment/RAChildInformationForm";
// import RAChildRiskDetailsForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/risk-assessment/RAChildRiskDetailsForm";
// import RADelegatedAuthorityForm from "@root/sections/foster-child/child-background-info/child-chronology-of-events/risk-assessment/RADelegatedAuthorityForm";
import { useState } from "react";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildRAChildDetailsForm from "@root/sections/foster-child/other-information/risk-assessment/ra-child-details-form/ChildRAChildDetailsForm";
import ChildRAChildInformationForm from "@root/sections/foster-child/other-information/risk-assessment/ra-child-information-form/ChildRAChildInformationForm";
import ChildRAChildRiskDetailsForm from "@root/sections/foster-child/other-information/risk-assessment/ra-child-risk-details-form/ChildRAChildRiskDetailsForm";
import ChildRADelegatedAuthorityForm from "@root/sections/foster-child/other-information/risk-assessment/ra-delegated-authority-form/ChildRADelegatedAuthorityForm";

const BREADCRUMBS = (fosterChildId: any) => {
  return [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      // href: `/foster-child/child-background-info/child-chronology-of-events?fosterChildId=${fosterChildId}`,
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Risk Assessment",
      href: "",
    },
  ];
};

const PAGE_TITLE = "Child Risk Assessment";
RiskAssessment.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function RiskAssessment() {
  const router = useRouter();
  const { id, action }: any = router.query;
  const [page, setPage] = useState(0);
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useGetChildChronologyOfEventsUploadedDocumentsListQuery({
      limit: 10,
      offset: page,
      id: id,
    });
  const [deleteUploadedDocument] =
    useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation();
  const [postUploadedDocument] =
    usePostChildChronologyOfEventsUploadedDocumentsMutation();
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
    formData.append("formName", "risk_assessment");
    formData.append("recordId", id);
    try {
      const res: any = await postUploadedDocument({
        addDocumentCcRequestDto: formData,
      }).unwrap();
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
      <HorizaontalTabs
        // disabled={
        //   !id && ["RA-Child Information", "RA-Child Risk Details", "RA-Delegated Authority Details"]
        // }
        tabsDataArray={[
          "RA-Child Details",
          "RA-Child Information",
          "RA-Child Risk Details",
          "RA-Delegated Authority Details",
          "Documents",
        ]}
      >
        <ChildRAChildDetailsForm />
        {/* <RAChildDetailsForm /> */}
        <ChildRAChildInformationForm />
        {/* <RAChildInformationForm /> */}
        <ChildRAChildRiskDetailsForm />
        {/* <RAChildRiskDetailsForm /> */}
        <ChildRADelegatedAuthorityForm />
        {/* <RADelegatedAuthorityForm /> */}
        <UploadDocuments
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
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
          // disabled={!!id && (action === "add" || action === "edit") ? false : true}
        />
      </HorizaontalTabs>
    </>
  );
}
