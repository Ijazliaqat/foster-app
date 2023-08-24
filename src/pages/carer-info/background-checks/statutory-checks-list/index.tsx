import Layout from "@root/layouts";
import StatutoryChecksList from "@root/sections/carer-info/background-checks/statutory-checks-list/StatutoryChecksList";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

StatutoryCheckList.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function StatutoryCheckList() {
  const router: any = useRouter();
  const { fosterCarerId } = router.query;
  if (!fosterCarerId) {
    router.push("/foster-carer-list");
  }
  // BREADCRUMBS
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: {
        pathname: "/carer-info",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Statutory Checks List",
      href: "",
    },
  ];
  const PAGE_TITLE = "Statutory Checks List";
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <StatutoryChecksList />
    </>
  );
}
