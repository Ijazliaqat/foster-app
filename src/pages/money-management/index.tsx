import React from "react";
//  @mui icons
import { Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { MoneyManagement } from "@root/sections/money-management/MoneyManagement";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
    {
      icon: <HomeIcon />,
      name: "Dashboard",
      href: `/dashboard`,
    },
    {
      name: "All",
      href: "",
    },
  ];

  const PAGE_TITLE = "Money Management";

 MoneyManagementList.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>;
  };

  export default function MoneyManagementList() {
    const router = useRouter();
  
    return (
      <Page title={PAGE_TITLE}>
        <TitleWithBreadcrumbLinks
          sx={{ mb: 2 }}
          breadcrumbs={BREADCRUMBS(router?.query)}
          title={PAGE_TITLE}
        />
        {/* <Paper elevation={3}> */}
            <MoneyManagement />
        {/* </Paper> */}
      </Page>
    );
  }