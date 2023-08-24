import React from "react";
//  @mui icons
import { Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { SavingAccount } from "@root/sections/money-management/saving-account/SavingAccount";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
    {
      icon: <HomeIcon />,
      name: "Money Management",
      href: `/money-management`,
    },
    {
      name: "All",
      href: "",
    },
  ];

  const PAGE_TITLE = "Saving Account for Minors";

SavingAccountList.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>;
  };

  export default function SavingAccountList() {
    const router = useRouter();
  
    return (
      <Page title={PAGE_TITLE}>
        <TitleWithBreadcrumbLinks
          sx={{ mb: 2 }}
          breadcrumbs={BREADCRUMBS(router?.query)}
          title={PAGE_TITLE}
        />
        {/* <Paper elevation={3}> */}
            <SavingAccount />
        {/* </Paper> */}
      </Page>
    );
  }