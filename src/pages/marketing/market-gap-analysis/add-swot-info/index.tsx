import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddSwotForm from "@root/sections/marketing/marketing-gap-analysis/add-swot-info-form/AddSwotForm";

const PAGE_TILE = "Add SWOT Analysis Info";

AddSwotInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Marketing",
          href: "/marketing",
        },
        {
          name: "SWOT Analysis",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AddSwotInfo() {
  return (
    <Page title={PAGE_TILE}>
      <AddSwotForm />
    </Page>
  );
}
