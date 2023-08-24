import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { Stack } from "@mui/material";
import { CarerDetailsHeader } from "@root/sections/foster-child/child-background-info/carer-details/carer-details-header";
import { CarerDetailsForm } from "@root/sections/foster-child/child-background-info/carer-details";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Carer Details";

// ----------------------------------------------------------------------

CarerDetails.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function CarerDetails() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <Stack direction={"column"} spacing={2}>
        <CarerDetailsHeader />
        <HorizaontalTabs
          tabsDataArray={[
            "Primary Carer",
            "Secondary Carer",
            "Backup Carer",
            "Respite Carer",
            "Swap Carer",
          ]}
        >
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
          <CarerDetailsForm disabled />
        </HorizaontalTabs>
      </Stack>
    </Page>
  );
}
