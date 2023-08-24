import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import RejectionForm from "@root/sections/matching-and-placement/placement/rejections/form/RejectionForm";

const PAGE_TILE = "Rejections";

PlacementModule.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Rejection List",
          href: "/placement/rejections",
        },
        {
          name: "Rejections",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function PlacementModule() {
  return (
    <Page title={PAGE_TILE}>
      <RejectionForm />
    </Page>
  );
}
