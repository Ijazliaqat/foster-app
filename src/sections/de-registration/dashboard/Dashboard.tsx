import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import HorizaontalTabs from '@root/components/HorizaontalTabs';
import { DeregistrationType } from './chart/DeregistrationType';
import DeregistrationYearWise from './chart/DeregistrationYearWise';
import RemindersAndNotifications from './reminders-and-notifications/RemindersAndNotifications';
import DeregistrationManagementTable from './deregistration-management-table/DeregistrationManagementTable';

const Dashboard = () => {
    return (
        <>
            <Card>
                <Box sx={{ padding: "10px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <DeregistrationManagementTable />
                        </Grid>
                    </Grid>
                </Box>
            </Card>

            <Box sx={{ mt: 2 }}>

                <Grid container spacing={2}>
                    <Grid item xl={6.5} lg={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={styles.cardStyles}>
                                    <HorizaontalTabs
                                        tabsDataArray={["Deregistration on Year-wise", "Deregistration Type"]}
                                        variant="fullWidth"
                                        spacing={0}
                                    >
                                        <DeregistrationYearWise />
                                        <DeregistrationType />
                                    </HorizaontalTabs>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={5.5} lg={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {/* <LocalAuthorityNotifications /> */}
                                <Card>
                                    <RemindersAndNotifications />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard



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