import Page from "@root/components/Page";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CarerAddressHistoryForm from "@root/sections/carer-info/personal-info/carer-address-history/CarerAddressHistoryForms";
import { Card } from "@mui/material";
import { defaultValues } from "@root/sections/carer-info/personal-info/carer-address-history";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const PAGE_TITLE = "Carer Address History";

AddAddressHistory.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AddAddressHistory() {
  let router = useRouter();
  let { fosterCarerId } = router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Carer Address List",
      href: ``,
    },
    {
      name: "Carer Address",
      href: ``,
    },
  ];

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <Card sx={{ p: 2 }}>
        <CarerAddressHistoryForm
          historyData={{ ...defaultValues }}
          formType={"add"}
        />
      </Card>
    </>
  );
}
