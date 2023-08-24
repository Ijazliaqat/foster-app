import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import CommunicatingEffectively from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/self-advocacy-toolkit/communicating-effectively/CommunicatingEffectively";

const PAGE_TILE = "Communicating  Effectively";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Carer Advocacy",
          href: "/advocacy/carer/dashboard/self-advocacy-toolkit",
        },
        {
          name: "Carer’s Self Advocacy Toolkit",
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
      <CommunicatingEffectively />
    </Page>
  );
}
