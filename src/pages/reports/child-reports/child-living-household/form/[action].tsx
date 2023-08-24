import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildLivingHouseholdForm from "@root/sections/reports/child-reports/child-living-household/child-living-household-form/ChildLivingHouseholdForm";
import { useRouter } from "next/router";

const PAGE_TITLE = "View Report";

ChildLivingHouseholdLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />, 
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Child Living in the Household's Comments",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ChildLivingHouseholdLayout() {
    const router = useRouter();
    const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <ChildLivingHouseholdForm action={action} id={id}/>
    </Page>
  );
}