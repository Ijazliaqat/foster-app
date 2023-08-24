import React, { Fragment } from "react";
import PanelTab from "./panel-tab/PanelTab";
import { PANELTABSDATAARRY } from "./panel-tab";
import { Card, Grid, Typography, useTheme } from "@mui/material";
import NextLink from "next/link";
import PanelDashboardCalendar from "../panel-tools/panel-calendar/PanelDashboardCalendar";
import PanelNotifications from "./panel-notifications/PanelNotifications";
import PanelMember from "./panel-member/PanelMember";
import PanelCharts from "./panel-charts/PanelCharts";

const PanelSection = ({ showPanelCharts }: any) => {
  const theme = useTheme();

  return (
    <>
      <PanelTab tabsDataArray={PANELTABSDATAARRY}>
        {PANELTABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid container spacing={2} minHeight={"140px"} alignItems={"center"}>
              {item?.innerDataArray?.map((innerItem, index: number) => (
                <Grid item xl={3} lg={4} md={6} xs={12} key={index}>
                  <NextLink href={innerItem?.link} style={styles?.nextLinkContainer}>
                    <Card sx={styles.tabsItems(item?.background)} key={innerItem?.id}>
                      <Typography sx={styles.innerTitle(item?.title, theme.palette.mode)}>{innerItem?.title}</Typography>
                    </Card>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </PanelTab>
      <Grid container spacing={2} sx={{ mt: "initial" }}>
        <Grid item lg={5} xs={12}>
          <PanelDashboardCalendar />
        </Grid>
        <Grid item lg={7} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12}>
              <PanelNotifications />
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              {showPanelCharts ? <PanelCharts /> : <PanelMember />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PanelSection;

const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  tabsItems: (background: string) => ({
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "62px",
    position: "relative",
  }),
  innerTitle: (title: string, mode: string) => ({
    color: title === "Panel Evaluation Forms" ? "#F6830F" : "#2CB764",
    fontSize: "16px",
    fontWeight: mode === "light" ? "500" : "400",
  }),
};
