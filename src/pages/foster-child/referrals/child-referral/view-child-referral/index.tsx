import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import usePath from "@root/hooks/usePath";
import { PersonalInfoForm } from "@root/sections/foster-child/referrals/child-referral/personalInfo";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import LaDetails from "@root/sections/foster-child/referrals/child-referral/laDetails/LaDetails";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

const PAGE_TITLE = "View Child Referral";

ViewChildReferral.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildReferral() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child/referrals/child-referral",
        skipQueries: ["childReferralId"],
      }),
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Personal Info", "LA-Details", "Document(s)"]}
      >
        <PersonalInfoForm disabled />
        <LaDetails disabled />
        <UploadDocuments
          readOnly={true}
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          // tableData={tableData}
          tableData={[
            {
              document: "bad.png",
              documentType: "png",
              date: "09/09/2009",
              personName: "My name",
              password: "password123",
            },
          ]}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          column={[
            "document",
            "documentType",
            "date",
            "personName",
            "password",
          ]}
          modalData={() => {}}
          onDelete={(data: any) => console.log("Deleting", data)}
          onPageChange={(page: any) => console.log("parent log", page)}
          // currentPage={metaData?.page}
          // totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Page>
  );
}
