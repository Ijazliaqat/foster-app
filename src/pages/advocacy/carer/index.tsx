import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CarerAdvocacy from "@root/sections/advocacy/carer-advocacy/CarerAdvocacy";

// ===================================================================
const PAGE_TILE = "Carer List";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/advocacy",
        },
        {
          name: "Advocacy",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <CarerAdvocacy />
    </Page>
  );
}
