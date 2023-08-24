import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildHolidayPreferenceForm from "@root/sections/foster-child/child-day-log/child-holiday-preference/ChildHolidayPreferenceForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import ChildHolidaypreferenceDocuments from "@root/sections/foster-child/child-day-log/child-holiday-preference/ChildHolidaypreferenceDocuments";

ChildHolidayPreferenceActions.getLayout = function GetLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function ChildHolidayPreferenceActions() {
  const Router: any = useRouter();
  const { action, fosterChildId, childHolidayPrefrence } = Router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
    },
    {
      name: "Holiday Ideas List",
      href: {
        pathname: "/foster-child/child-day-log/child-holiday-preference",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Holiday Ideas List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Child Holiday Preference";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Holiday Details", "Uploaded Documents"]}
      >
        <ChildHolidayPreferenceForm
          action={action}
          fosterChildId={fosterChildId}
          childHolidayPrefrence={childHolidayPrefrence}
        />
        <ChildHolidaypreferenceDocuments
          action={action}
          fosterChildId={fosterChildId}
          childHolidayPrefrence={childHolidayPrefrence}
        />
      </HorizaontalTabs>
    </Box>
  );
}
