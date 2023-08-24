import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { ViewDeclaration } from "@root/sections/recruitment/contracts-and-declarations/view-declaration/ViewDeclaration";
import Page from "@root/components/Page";
const RecruitmentViewDecalaration = () => {
  const PAGE_TITLE = "Recruitment";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Contract & Declaration",
      href: "",
    },
    {
      name: "Declaration",
      href: "",
    },
  ];
  return (
    <Page title="View-Decalaration">
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      >
        <ViewDeclaration />
      </Layout>
    </Page>
  );
};
export default RecruitmentViewDecalaration;
