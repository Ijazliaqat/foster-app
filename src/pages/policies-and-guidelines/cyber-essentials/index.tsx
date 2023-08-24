import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CyberEssentials from "@root/sections/policies-and-guidelines/cyber-essentials/CyberEssentials";

// ============================================================================================

const PAGE_TITLE = "Cyber Essentials";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/policies-and-guidelines",
        },
        {
          name: "General Data Protection",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function PolicyGuidelinesPage() {
  return (
    <Page title={PAGE_TITLE}>
      <CyberEssentials />
    </Page>
  );
}
