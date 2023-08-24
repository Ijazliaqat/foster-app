import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AddReviewingOfficerReport from "@root/sections/reports/ifa-reports/FR-G/add-reviewing-officer-report/AddReviewingOfficerReport";

const PAGE_TITLE = "Reports";

FRG.getLayout = function getLayout(page: any) {
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
          name: "Child Reports",
          href: "/reports/ifa-reports/FR-G-reviewing-officer",
        },
        {
          name: "FR-G Reviewing Officer Report",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRG() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AddReviewingOfficerReport action={action} id={id} />
    </Page>
  );
}
