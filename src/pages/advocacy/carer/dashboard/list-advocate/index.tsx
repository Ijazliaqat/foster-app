import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ListAdvocate from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/list-advocate/ListAdvocate";

const PAGE_TILE = "Carer Advocate";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA Dashboard",
          href: "/advocacy/carer/dashboard",
        },
        {
          name: "Contact Directory",
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
      <ListAdvocate />
    </Page>
  );
}
