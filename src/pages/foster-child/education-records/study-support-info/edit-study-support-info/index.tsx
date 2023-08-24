import React, { useState } from "react";

// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import StudySupportInfoForm from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoForm";
import {
  useDeleteUploadDocumentsStudySupportInfoByIdMutation,
  useGetUploadDocumentsStudySupportInfoQuery,
  usePostUploadDocumentsStudySupportInfoApiMutation,
} from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";

EditStudySupportInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function EditStudySupportInfo() {
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const formData = new FormData();
  const Router: any = useRouter();
  const { fosterChildId, id } = Router.query;

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
    recordId :id,
  };

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Study Support Info List",
      href: {
        pathname: "/foster-child/education-records/study-support-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Study Support Info",
      href: "",
    },
  ];

  const PAGE_TITLE = "Study Support Info";

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching: isDocumentFetching,
    isError: hasDocumentError,
    isSuccess: isDocumentSuccess,
  } = useGetUploadDocumentsStudySupportInfoQuery({ fosterChildId, params });

  const [postDocs] = usePostUploadDocumentsStudySupportInfoApiMutation();
  const [deleteData] = useDeleteUploadDocumentsStudySupportInfoByIdMutation();
  const tableData: any = documentData?.data?.documents;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = (data: any) => {
    formData.append("fosterChildId", fosterChildId);
    formData.append("formName", "STUDY_SUPPORT_INFO");
    formData.append("recordId", id);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);
    postDocs(formData);
  };

  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Study Support Info", "Upload Document"]}
      >
        <StudySupportInfoForm />
        <UploadDocuments
          onDelete={(row: any) => {
            deleteData(row.id);
          }}
          searchParam={(searchedText: any) =>
            setSearchHandle(searchedText.search)
          }
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isDocumentFetching}
          isError={hasDocumentError}
          isSuccess={isDocumentSuccess}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          modalData={documentUploadHandler}
          onPageChange={(page: any) => pageChangeHandler(page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Box>
  );
}
