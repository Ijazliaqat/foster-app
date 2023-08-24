import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FRC2Section from '../../../../sections/reports/ifa-reports/FR-C2/FRC2';
const PAGE_TITLE = "Reports";

FRC2.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "IFA Reports",
          href: "/reports",
        },
        {
          name: "FR-C2 Young Person Living In The Household's Comments"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRC2() {
  return (
    <Page title={PAGE_TITLE}>
      <FRC2Section />
    </Page>
  );
}
