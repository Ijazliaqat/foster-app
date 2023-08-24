import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AddChildArrangement from "@root/sections/reports/ifa-reports/FR-F4/add-child-arrangement/AddChildArrangement";

const PAGE_TITLE = "Reports";

FRF4.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-F4-parent-in-parent-and-child-arrangement",
        },
        {
          name:"FR-F4: Parent In Parent And Child Arrangement"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRF4() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AddChildArrangement action={action} id={id} />
    </Page>
  );
}
