import Layout from "@root/layouts";
import ChronologyOfEvents from "@root/sections/carer-info/personal-info/chronology-of-events/ChronologyOfEvents";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

CarerChronologyOfEvents.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function CarerChronologyOfEvents() {
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
      name: "Carer Chronology of Events",
      href: "",
    },
  ];

  const PAGE_TITLE = "Chronology of Events";

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ChronologyOfEvents />
    </>
  );
}
