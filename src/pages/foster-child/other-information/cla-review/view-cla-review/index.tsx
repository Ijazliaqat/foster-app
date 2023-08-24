import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { ClaReviewForm } from "@root/sections/foster-child/other-information/cla-review/form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useRouter } from "next/router";
import {
  useClaReviewDocListQuery,
  useGetClaReviewIdQuery,
} from "@root/services/foster-child/other-information/cla-review/claReviewApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "View CLA Review";

ViewClaReview.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewClaReview() {
  const { makePath } = usePath();

  const router: any = useRouter();
  const { claReviewId } = router.query;

  const { data, isLoading, isError } = useGetClaReviewIdQuery(claReviewId);

  const [docParams, setDocParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
  });

  const {
    data: docData,
    isLoading: docLoading,
    isFetching: docFetching,
    isError: docError,
    isSuccess: docSuccess,
  }: any = useClaReviewDocListQuery({ claReviewId, params: docParams });

  const tableData: any = docData?.data?.cla_review_info_document;
  const metaData: any = docData?.data?.meta;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "CLA Review List",
      href: makePath({
        path: "/foster-child/other-information/cla-review",
        skipQueries: ["claReviewId"],
      }),
    },
    {
      name: "CLA Review Details",
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"CLA Review"}
      />

      <HorizaontalTabs tabsDataArray={["CLA Review", "Upload Document"]}>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <ClaReviewForm
            disabled
            initialValueProps={{
              ...data[0],
              dateOfReview: new Date(data[0]?.dateOfReview),
              dueDate: new Date(data[0]?.dueDate),
            }}
          />
        )}

        <UploadDocuments
          readOnly
          searchParam={(searchedText: string) =>
            setDocParams((prev: any) => {
              return { ...prev, search: searchedText.search };
            })
          }
          tableData={tableData}
          isLoading={docLoading}
          isFetching={docFetching}
          isError={docError}
          isSuccess={docSuccess}
          column={[
            "chooseFiles",
            "documentType",
            "documentDate",
            "personName",
            "password",
          ]}
          onPageChange={(page: any) =>
            setDocParams((prev: any) => {
              return { ...prev, offset: (page - 1) * 10 };
            })
          }
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Page>
  );
}
