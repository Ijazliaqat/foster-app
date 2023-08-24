import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import NextOFKin from "@root/sections/carer-info/other-information/next-of-kin/nextOFKin";



// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Next of Kin",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "Carer Info",
    href: "/carer-info/",
  },
  {
    name: "All",
    href: "",
  },
];
const PAGE_TITLE = "Next of Kin";
// ----------------------------------------------------------------------

NextOfKin.getLayout = function getLayout(page: any) {
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

export default function NextOfKin() {
  return (
    <Box>
      <NextOFKin />
    </Box>
  );
}
