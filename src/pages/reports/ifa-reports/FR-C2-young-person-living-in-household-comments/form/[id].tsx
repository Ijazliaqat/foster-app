import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import YoungPersonLivingComments from "@root/sections/reports/ifa-reports/FR-C2/young-person-living-comments/YoungPersonLivingComments";
import { useRouter } from "next/router";

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
          href: "/reports/ifa-reports/FR-C2-young-person-living-in-household-comments",
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
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <YoungPersonLivingComments action={action} id={id} />
    </Page>
  );
}
