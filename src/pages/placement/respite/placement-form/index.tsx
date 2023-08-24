import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import RespitePlacementForm from "@root/sections/matching-and-placement/placement/respite-placement/respite-placement-form/RespitePlacementForm";

const PAGE_TILE = "Child Respite";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Respite List",
          href: "/respite-placement",
        },
        {
          name: "Child Respite",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AddPlacementForm() {
  return (
    <Page title={PAGE_TILE}>
      <RespitePlacementForm />
    </Page>
  );
}
