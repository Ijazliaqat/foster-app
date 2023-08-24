import React, { Fragment } from "react";
import NextLink from "next/link";
import { Box, Card, Grid, Typography } from "@mui/material";
import TrainingTabs from "@root/sections/training/dashboard/vertical-tabs/TrainingTabs";
import { TABSDATAARRY } from "@root/sections/training/dashboard/vertical-tabs/TabsData";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UpcommingCalander from "@root/sections/training/dashboard/calendar/UpcommingCalander";
import TrainingTasks from "@root/sections/training/dashboard/tasks/TrainingTasks";
import TrainingNotifications from "@root/sections/training/dashboard/notification/TrainingNotifications";
import CourseProfile from "@root/sections/training/dashboard/course-profile/CourseProfile";
import { useDashboard } from "./useDashboard";
import TrainingProfile from "./training-profile/TrainingProfile";

const Dashboard = () => {
  const { theme } = useDashboard();
  return (
    <Box>
      <Box gap={4} sx={{display:"flex" , justifyContent:"end"  , margin :"0px 40px 5px 0px"}}>
      <Typography sx={{fontWeight:500, fontSize:"16px"}}>Home</Typography>
      <Typography sx={{fontWeight:500, fontSize:"16px"}}>Monitoring Dashboard</Typography>
    </Box>
      <TrainingTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid container spacing={2} minHeight={"230px"}>
              {item?.innerDataArray?.map((innerItem) => (
                <Grid key={innerItem.id} item xl={3} lg={4} md={6} xs={12}>
                  <NextLink
                    href={innerItem?.link}
                    style={styles?.nextLinkContainer}
                  >
                    <Card
                      sx={styles.tabsItems(item?.background)}
                      key={innerItem?.id}
                    >
                      <Typography
                        style={{ color: theme.palette.primary.main }}
                        sx={styles.innerTitle(theme.palette.mode)}
                      >
                        {innerItem?.title}
                      </Typography>
                    </Card>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </TrainingTabs>

      <Box sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <TrainingProfile />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card sx={styles.cardStyles}>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "16px",
                  paddingBottom: "0",
                  color: theme.palette.primary.main,
                }}
              >
                Course Profile
              </Typography>
              <HorizaontalTabs
                tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}
              >
                {[1, 2, 3].map((index: any) => (
                  <CourseProfile key={index} />
                ))}
              </HorizaontalTabs>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xl={3} lg={12} xs={12}>
            <UpcommingCalander />
          </Grid>
          <Grid item xl={4.5} lg={6} md={12}>
            <TrainingTasks />
          </Grid>
          <Grid item xl={4.5} lg={6} md={12}>
            <TrainingNotifications />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  cardStyles: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),
  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
  tabsItems: (background: string) => ({
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    textAlign: "center",
    borderLeft: `10px solid ${background}`,
  }),
  innerTitle: (mode: string) => ({
    color: mode === "light" ? "#343A40" : mode,
    fontSize: "16px",
    fontWeight: mode === "light" ? "500" : "400",
  }),
  profileCardHeading: {},
};
