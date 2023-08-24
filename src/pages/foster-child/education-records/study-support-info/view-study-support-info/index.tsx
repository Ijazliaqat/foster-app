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
import { useGetUploadDocumentsStudySupportInfoQuery } from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";

ViewStudySupportInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewStudySupportInfo() {
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const Router: any = useRouter();
  const { fosterChildId, id } = Router.query;

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
    recordId: id,
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

  const tableData: any = documentData?.data?.documents;
  const metaData: any = documentData?.data?.meta;

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
      <HorizaontalTabs tabsDataArray={["Study Support Info", "Document"]}>
        <StudySupportInfoForm disabled />
        <UploadDocuments
          readOnly={true}
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
          onPageChange={(page: any) => pageChangeHandler(page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Box>
  );
}
