import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import BehavioralInfoTable from "@root/sections/foster-child/health-medical-history/behavioral-info-list/behavioralInfoTable";
import router, { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { enqueueSnackbar } from "notistack";

// Constants

const PAGE_TITLE = "Behavioural Info list";
// ----------------------------------------------------------------------

BehaviouralInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BehaviouralInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Behavioural Info list",
      href: "/carer-info/other-information/next-of-kin",
    },
    {
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Behavioral Info list",
      href: "",
    },
  ];
  if (!fosterChildId) {
    router.push("/foster-child-lists");
    enqueueSnackbar("SomeThing Went Worng", { variant: "error" });
  } else {
    return (
      <Box>
        <TitleWithBreadcrumbLinks
          sx={{ mb: 2 }}
          breadcrumbs={BREADCRUMBS}
          title={PAGE_TITLE}
        />
        <BehavioralInfoTable fosterChildId={fosterChildId} />
      </Box>
    );
  }
}
