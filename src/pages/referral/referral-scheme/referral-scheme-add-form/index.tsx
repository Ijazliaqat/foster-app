import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ReferralSchemeAddForm from "@root/sections/referral/referral-scheme/referral-scheme-form/ReferralSchemeForm";
import UploadDocumentsTable from "@root/sections/referral/referral-scheme/eligiblity-criteria-document/UploadDocumentsTable";

const PAGE_TITLE = "Referral Scheme Form";
export const ReferralSchemeTabsData = ["Scheme Details", "Eligiblity Criteria - Document",];
ReferralScheme.getLayout = function getLayout(page: any) {
  return (
    <Layout

      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Referral Scheme",
        },
      ]}

      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};



export default function ReferralScheme() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={ReferralSchemeTabsData}>
        <ReferralSchemeAddForm />
        <UploadDocumentsTable />
      </HorizaontalTabs>
    </Page>
  );
}
