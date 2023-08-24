import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CertificateManagement from "@root/sections/training/manage-courses/certificate-management/CertificateManagement";


const PAGE_TILE = "Certificate Management";
CertificateManagementPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "Certificate Management",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function CertificateManagementPage() {
  return (
    <Page title={PAGE_TILE}>
      <CertificateManagement />
    </Page>
  );
}
