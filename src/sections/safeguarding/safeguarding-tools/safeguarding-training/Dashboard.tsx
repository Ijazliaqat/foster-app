import { Box, Card, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import NextLink from "next/link";

import TrainingTabs from "./vertical-tabs/TrainingTabs";
import { TABSDATAARRY } from "./vertical-tabs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";
import UpcommingCalander from "./calander/UpcommingCalander";
import TrainingTasks from "./training-tasks/TrainingTasks";
import TrainingNotifications from "./training-notifications/TrainingNotifications";

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = React.useState("pie");
  const [selectedChart1, setSelectedChart1] = React.useState("pie");

  return (
    <>
      <TrainingTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid container spacing={2}>
              {item?.innerDataArray?.map((innerItem, index) => (
                <Grid key={index} item xl={3} lg={4} md={6} xs={12}>
                  <Card sx={styles.tabsItems(item?.background)} key={innerItem?.id}>
                    <NextLink href={innerItem?.link} style={styles?.nextLinkContainer}>
                      <Typography>{innerItem?.title}</Typography>
                    </NextLink>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </TrainingTabs>
      <Box sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Card sx={styles.cardStyles}>
              <Typography style={styles.profileCardHeading}>Training Profile</Typography>
              <HorizaontalTabs tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}>
                {["Foster Carer", "Social Worker", "Employee"].map((item: any) => (
                  <>
                    {selectedChart === "pie" ? (
                      <PieChart selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
                    ) : (
                      <BarChart selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
                    )}
                  </>
                ))}
              </HorizaontalTabs>
            </Card>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card sx={styles.cardStyles}>
              <Typography style={styles.profileCardHeading}>Course Profile</Typography>
              <HorizaontalTabs tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}>
                {["Foster Carer", "Social Worker", "Employee"].map((item: any) => (
                  <>
                    {selectedChart1 === "pie" ? (
                      <PieChart
                        selectedChart={selectedChart1}
                        setSelectedChart={setSelectedChart1}
                      />
                    ) : (
                      <BarChart
                        selectedChart={selectedChart1}
                        setSelectedChart={setSelectedChart1}
                      />
                    )}
                  </>
                ))}
              </HorizaontalTabs>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xl={3} xs={12}>
            <UpcommingCalander />
          </Grid>
          <Grid item xl={4.5} lg={6} xs={12}>
            <TrainingTasks />
          </Grid>
          <Grid item xl={4.5} lg={6} xs={12}>
            <TrainingNotifications />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;

// ----------------------------------------------------------------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  cardStyles: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  nextLinkContainer: {
    textDecoration: "none",
    display: "block",
    color: "#41464C",
    fontWeight: "600",
  },
  tabsItems: (background: string) => ({
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    textAlign: "center",
    borderLeft: `10px solid #F68B0F`,
  }),
  profileCardHeading: {
    fontSize: "18px",
    fontWeight: "600",
    padding: "16px",
    paddingBottom: "0",
  },
};
