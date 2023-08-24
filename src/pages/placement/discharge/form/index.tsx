import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildDischargeForm from "@root/sections/matching-and-placement/placement/discharge-placement/child-discharge-form/ChildDischargeForm";

// =======================================================================================================

const PAGE_TILE = "Child Discharge";

ChildReferral.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Discharge List",
          href: "/placement/discharge",
        },
        {
          name: "Child Respite",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ChildReferral() {
  return (
    <Page title={PAGE_TILE}>
      <ChildDischargeForm />
    </Page>
  );
}
