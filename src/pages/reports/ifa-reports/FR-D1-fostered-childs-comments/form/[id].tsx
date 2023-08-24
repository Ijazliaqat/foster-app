import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FosterChildComments from "@root/sections/reports/ifa-reports/FR-D1/fotser-child-comments/FosterChildComments";
import { useRouter } from "next/router";

const PAGE_TITLE = "Reports";

FRD1.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-D1-fostered-childs-comments",
        },
        { name: "FR-D1 Fostered Child's Comments" },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRD1() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <FosterChildComments action={action} id={id} />
    </Page>
  );
}
