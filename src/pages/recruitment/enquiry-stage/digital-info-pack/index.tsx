import React, { Fragment } from "react";

// layout
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";

import HomeIcon from "@mui/icons-material/Home";
import DigitalInfoPack from "@root/sections/recruitment/enquiry-stage/digital-info-pack/DigitalInfoPack";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Enquiry Stage",
    href: "/recruitment",
  },
  {
    name: "Digital Info Pack",
    href: "",
  },
];
const PAGE_TITLE = "Recruitment";

// ----------------------------------------------------------------------

CarerInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function CarerInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <DigitalInfoPack />
    </Page>
  );
}

// ----------------------------------------------------------------------
