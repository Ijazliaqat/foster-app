import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import FosteredYoungPersonCommets from "@root/sections/reports/ifa-reports/FR-D2/fostered-young-person-commets/FosteredYoungPersonCommets";

const PAGE_TITLE = "Reports";

FRD2.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-D2-fostered-young-person-comments",
        },
        {
          name:"FR-D2 Fostered Young Person's Comments"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRD2() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <FosteredYoungPersonCommets action={action} id={id} />
    </Page>
  );
}
