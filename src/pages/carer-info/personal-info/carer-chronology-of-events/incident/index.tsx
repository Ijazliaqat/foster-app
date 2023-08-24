import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import IncFrom from "@root/sections/carer-info/personal-info/chronology-of-events/incident/IncidentFrom";
import UploadedDocuments from "@root/sections/carer-info/personal-info/chronology-of-events/incident/UploadedDocuments";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

incident.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function incident() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Router: any = useRouter();
  const { action, id, fosterCarerId } = Router.query;
  if (!action && !id) {
    Router.push({
      pathname: "/carer-info/personal-info/carer-chronology-of-events",
      query: { fosterCarerId: fosterCarerId },
    });
  }
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Incident list",
      href: {
        pathname: "/carer-info/personal-info/carer-chronology-of-events",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Incident",
      href: "",
    },
  ];

  const PAGE_TITLE = "Incident";

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs tabsDataArray={["Incident", "Uploaded Documents"]}>
        <IncFrom action={action} id={id} />
        <UploadedDocuments action={action} id={id} />
      </HorizaontalTabs>
    </>
  );
}
