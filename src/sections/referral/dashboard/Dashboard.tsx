import React, { Fragment, useState } from "react";
import NextLink from "next/link";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import ReferralTabs from "./vertical-tabs/ReferralTabs";
import { TABSDATAARRY } from "./vertical-tabs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";
import { chartTitles } from "./charts";
import ReferralWorkflow from "./referral-workflow/ReferralWorkflow";
import ReferralNotifications from "./referral-notifications/ReferralNotifications";
import ReferralStats from "./referral-stats/ReferralStats";

const Dashboard = () => {
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <>
      <ReferralTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid container spacing={2} minHeight={"140px"} alignItems={"center"}>
              {item?.innerDataArray?.map((innerItem, index) => (
                <Grid key={index} item xl={3} lg={4} md={6} xs={12}>
                  <NextLink href={innerItem?.link} style={styles?.nextLinkContainer}>
                    <Card sx={styles.tabsItems(item?.background)} key={innerItem?.id}>
                      <Typography sx={styles.innerTitle(theme.palette.mode)}>
                        {innerItem?.title}
                      </Typography>
                    </Card>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </ReferralTabs>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xl={7} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={styles.cardStyles}>
                  <HorizaontalTabs
                    tabsDataArray={["Pie Chart", "Bar Chart"]}
                    variant="fullWidth"
                    spacing={0}
                  >
                    <PieChart />
                    <BarChart />
                  </HorizaontalTabs>
                  <Box sx={styles.iconStyles}>
                    <InfoIcon
                      sx={{ width: "28px", height: "28px", color: "#0E918C" }}
                      onClick={() => setShowStatistics(!showStatistics)}
                    />
                  </Box>
                  {showStatistics && (
                    <Box sx={styles.statisticsContainer}>
                      <Typography sx={styles.statisticsHeading}>Statistics</Typography>
                      <Box sx={{ pb: "10px", pt: "6px", ml: "16px" }}>
                        {chartTitles?.map((item, index) => (
                          <Box key={index} sx={{ mt: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                gap: "6px",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "18px",
                                  height: "16px",
                                  background: item?.color,
                                  borderRadius: "4px",
                                }}
                              ></Box>
                              <Typography fontSize={10} fontWeight={500}>
                                {`${item?.title}: ${item?.percentage}%`}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Card>
              </Grid>
              <Grid item xs={12}>
                <ReferralWorkflow />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={5} lg={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ReferralNotifications />
              </Grid>
              <Grid item xs={12}>
                <ReferralStats />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;

//-----------Styles------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  cardStyles: {
    position: "relative",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  iconStyles: {
    position: "absolute",
    top: { lg: "16%", sm: "14%", xs: "12%" },
    right: "1.5%",
    cursor: "pointer",
  },
  statisticsContainer: {
    position: "absolute",
    textAlign: "center",
    top: "19%",
    right: "4.6%",
    background: "#fff",
    boxShadow: "0px 0px 7px rgba(14, 145, 140, 0.25)",
    borderRadius: "10px",
    width: "134px",
    height: "226px",
  },
  statisticsHeading: {
    padding: "9px 0",
    fontSize: "14px",
    fontWeight: "500",
    borderBottom: "3px solid #0E918C",
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
};
