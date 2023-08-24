import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import FosterChildListTable from "@root/sections/foster-child-list/FosterChildListTable";
import FosterChildTasks from "@root/sections/foster-child-list/FosterChildTasks";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "ChildList",
    href: "/foster-child-list",
  },
  {
    name: "Dashboard",
    href: "/foster-child",
  },
  {
    name: "ChildList info list",
    href: "",
  },
];
const PAGE_TITLE = "ChildList";
// ----------------------------------------------------------------------

FosterChildLists.getLayout = function getLayout(page: any) {
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

export default function FosterChildLists() {
  return (
    <Box>
      <FosterChildListTable />
      <Box sx={{ mt: 2 }}>
        <FosterChildTasks />
      </Box>
    </Box>
  );
}
