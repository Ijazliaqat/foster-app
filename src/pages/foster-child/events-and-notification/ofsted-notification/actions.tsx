import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HospitalInfoListFrom from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoListFrom";
import HospitalInfoUpload from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoUpload";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import OfstedNotificationform from "@root/sections/foster-child/events-and-notification/ofsted-Notification/ofstedNotificationform";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import OfstedNotificationuploadtable from "@root/sections/foster-child/events-and-notification/ofsted-Notification/OfstedNotificationuploadtable";

OfstedNotificationActions.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function OfstedNotificationActions() {
  const Router: any = useRouter();
  const { action, fosterChildId, OfstedNotificationID } = Router.query;
  const PAGE_TITLE = "Ofsted Notification";

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Ofsted Notification List",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Ofsted Notification Form",
      href: "",
    },
  ];

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Ofsted Notification", "Uploaded Documents"]}
      >
        <OfstedNotificationform
          action={action}
          fosterChildId={fosterChildId}
          OfstedNotificationID={OfstedNotificationID}
        />

        <OfstedNotificationuploadtable
          action={action}
          fosterChildId={fosterChildId}
          OfstedNotificationID={OfstedNotificationID}
        />
      </HorizaontalTabs>
    </Box>
  );
}
