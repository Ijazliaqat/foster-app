import React from "react";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CyberEssentialsTabs from "@root/sections/policies-and-guidelines/cyber-essentials/cyber-accordan-data/cyber-essentials-tabs/CyberEssentialsTabs";

// ============================================================================================================================

const PAGE_TITLE = "Cyber Essentials";

PolicyGuidelinesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA",
          href: "/policies-and-guidelines/cyber-essentials",
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
  const { query } = useRouter();
  const disabled = query.action === "view" ? true : false;
  return (
    <Page title={PAGE_TITLE}>
      <CyberEssentialsTabs disabled={disabled} title={query.title} />
    </Page>
  );
}
