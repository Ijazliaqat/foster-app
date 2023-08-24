import React from "react";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { SchoolDetailInfoTable } from "@root/sections/foster-child/education-records/school-detail-info";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants

// ----------------------------------------------------------------------

SchoolDetailInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
    showTitleWithBreadcrumbs={false}
    >
      {page}
    </Layout>
  );
};
export default function SchoolDetailInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
     href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "School Detail Info List",
      href: "",
    },
  ];
  
  const PAGE_TITLE = "School Detail Info ";
  return (
    <Box>
       <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <SchoolDetailInfoTable fosterChildId={fosterChildId}/>
    </Box>
  );
}
