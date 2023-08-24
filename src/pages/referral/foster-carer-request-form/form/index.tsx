import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HomeIcon from "@mui/icons-material/Home";
import { PesonalInfoForm } from "@root/sections/referral/foster-carer-request-form/personal-info-form";
import { ApprovedDetailsForm } from "@root/sections/referral/foster-carer-request-form/approved-details-form";
import UploadDocTable from "@root/sections/referral/foster-carer-request-form/upload-documents/UploadDocTable";
import TabsSection from "@root/sections/referral/foster-carer-request-form/tabs";
import { useRouter } from "next/router";

const PAGE_TITLE = "Add Carer Request Form";

export const CarerRequestData = [
  "Personal Info",
  "Approved Details",
  "Upload Documents",
];

// ----------------------------------------------------------------------

ApplicationForm.getLayout = function getLayout(page: any) {
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
          name: "Carer list",
        },
      ]}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ApplicationForm() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <TabsSection action={action} id={id} />
    </Page>
  );
}
