import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import HouseholdComments from "@root/sections/reports/ifa-reports/FR-C1/household-comments/HouseholdComments";
import { useRouter } from "next/router";
const PAGE_TITLE = "Reports";

FRC1.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-C1-child-living-in-household-comments",
        },
        {
          name: "FR-C1 Child Living In The Household's Comments"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRC1() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <HouseholdComments action={action} id={id} />
    </Page>
  );
}
