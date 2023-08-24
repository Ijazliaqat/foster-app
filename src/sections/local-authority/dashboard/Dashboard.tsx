import React, { Fragment, useState } from "react";
import NextLink from "next/link";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import LocalAuthorityTabs from "./vertical-tabs/LocalAuthorityTabs";
import { TABSDATAARRY } from "./vertical-tabs";
import LocalAuthorityNotifications from "./local-authority-notifications/LocalAuthorityNotifications";
import LocalAuthorityTable from "./local-authority-table/LocalAuthorityTable";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";

const Dashboard = () => {
    const theme = useTheme();
    return (
        <>
            <LocalAuthorityTabs tabsDataArray={TABSDATAARRY}>
                {TABSDATAARRY?.map((item) => (
                    <Fragment key={item?.index}>
                        <Grid container spacing={2} minHeight={"140px"} alignItems={"center"}>
                            {item?.innerDataArray?.map((innerItem, index) => (
                                <Grid key={index} item xl={3.9} lg={4} md={6} xs={12}>
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
            </LocalAuthorityTabs>
            <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xl={6} lg={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={styles.cardStyles}>
                                    <HorizaontalTabs
                                        tabsDataArray={["Children Placement", "Year Wise Placement"]}
                                        variant="fullWidth"
                                        spacing={0}
                                    >
                                        <PieChart />
                                        <BarChart />
                                    </HorizaontalTabs>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={12} xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <LocalAuthorityNotifications />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalAuthorityTable />
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
