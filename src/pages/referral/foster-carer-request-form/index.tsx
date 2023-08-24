import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import FosterCarerRequestFormTable from "@root/sections/referral/foster-carer-request-form/FosterCarerRequest";


const PAGE_TILE = "Carer list";

CarerRequestForm.getLayout = function getLayout(page: any) {
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

export default function CarerRequestForm() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <FosterCarerRequestFormTable />
    </Page>
  );
}
