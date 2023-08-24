import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FosterTalk from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/foster-talk/FosterTalk";

const PAGE_TILE = "Foster Talk";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Advocacy Dashboard",
          href: "/advocacy/carer/dashboard",
        },
        {
          name: "Carer List",
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
      <FosterTalk />
    </Page>
  );
}
