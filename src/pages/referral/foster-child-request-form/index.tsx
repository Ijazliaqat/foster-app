import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import FosterChildList from "@root/sections/referral/foster-child-request-form/FosterChildListTable";

const PAGE_TILE = "Child list";

ChildRequestForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Referral",
          href: "/referral",
        },
        {
          name: "Request form",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ChildRequestForm() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
     <FosterChildList/>
    </Page>
  );
}
