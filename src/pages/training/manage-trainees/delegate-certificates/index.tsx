import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import DelegateCertificateAccordin from "@root/sections/training/manage-trainees/delegate-certificates/DelegateCertificateAccordin";

const PAGE_TILE = "Delegate Certificates";

DelegateCertificates.getLayout = function getLayout(page: any) {
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
          name: "Training Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function DelegateCertificates() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <DelegateCertificateAccordin />
    </Page>
  );
}
