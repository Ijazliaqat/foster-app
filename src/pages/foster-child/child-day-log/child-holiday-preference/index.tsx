import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";

import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import ChildHolidayPrefrencetable from "@root/sections/foster-child/child-day-log/child-holiday-preference/ChildHolidayPrefrencetable";

ChildHolidayPreference.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ChildHolidayPreference() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
    },
    {
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Holiday Ideas List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Child Holiday Preference";
  // ----------------------------------------------------------------------
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ChildHolidayPrefrencetable fosterChildId={fosterChildId} />
    </Box>
  );
}
