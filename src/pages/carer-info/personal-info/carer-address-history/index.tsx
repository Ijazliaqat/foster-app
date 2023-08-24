import Page from "@root/components/Page";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Card } from "@mui/material";
import { CarerAddressHistoryTable } from "@root/sections/carer-info/personal-info/carer-address-history/CarerAddressTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const PAGE_TITLE = "Carer Address History";

AddressHistory.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AddressHistory() {
  let router = useRouter();
  let { fosterCarerId } = router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: `/carer-info?fosterCarerId=${fosterCarerId}`,
    },
    {
      name: "Carer Adrress List",
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
        <CarerAddressHistoryTable />
      </Card>
    </>
  );
}
