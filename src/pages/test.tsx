import Layout from "@root/layouts";
import React, { useState } from "react";
import Page from "@root/components/Page";
import { Box, Grid } from "@mui/material";

import { useTheme } from "@emotion/react";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PanelSection from "@root/sections/recruitment/assessment-stage-two/fostering-panel/PanelSection";
import CalendarEvents from "@root/sections/recruitment/assessment-stage-two/fostering-panel/CalendarEvents";
import PanelNotifications from "@root/sections/recruitment/assessment-stage-two/fostering-panel/PanelNotifications";
import PieChart from "@root/sections/recruitment/assessment-stage-two/fostering-panel/charts/PieChart";
import BarChart from "@root/sections/recruitment/assessment-stage-two/fostering-panel/charts/BarChart";
//  @mui icons

import HomeIcon from "@mui/icons-material/Home";
import { SignOffApproval } from "@root/sections/recruitment/assessment-stage-two/sign-off-approval";
import PanelCaseListTable from "@root/sections/recruitment/assessment-stage-two/agency-decision/PanelCaseListTable";
import BankAccountDetailsSection from "@root/sections/carer-info/other-info/bank-account-details/BankAccountDetailsSection";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import VocationalCourseInfoTable from "@root/sections/foster-child/vocational-course-info/vocational-course-info-table/VocationalCourseInfoTable";

// -----------------------------------------------------------------------
// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Assessment Stage 2",
    href: "/assessment-stage-2",
  },
  {
    name: "Fostering Panel Recommendation",
    href: "/fostering-panel-recommendation",
  },
];

const PAGE_TITLE = "Recruitment";

// ----------------------------------------------------------------------

FosteringPanelRecommendation.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function FosteringPanelRecommendation() {
  const theme: any = useTheme();

  // return (
  //   <Page title={PAGE_TITLE}>
  //     <PanelSection />
  //     <Box sx={{ mt: 2 }}>
  //       <Grid container spacing={4}>
  //         <Grid item xs={12} md={5}>
  //           <CalendarEvents />
  //         </Grid>
  //         <Grid item xs={12} md={7}>
  //           <Grid container spacing={2}>
  //             <Grid item xs={12}>
  //               <PanelNotifications />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <Box
  //                 sx={{
  //                   boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
  //                   borderRadius: "10px",
  //                   backgroundColor: theme.palette.background.default,
  //                 }}
  //               >
  //                 <HorizaontalTabs tabsDataArray={["Pie Chart", "Bar Chart"]}>
  //                   <PieChart />

  //                   <BarChart />
  //                 </HorizaontalTabs>
  //               </Box>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   </Page>
  // );

  // return (
  //   <Page title={PAGE_TITLE}>
  //     <PanelCaseListTable />
  //   </Page>
  // );
  return (
    <Page title={PAGE_TITLE}>
      <VocationalCourseInfoTable />
    </Page>
  );
}
