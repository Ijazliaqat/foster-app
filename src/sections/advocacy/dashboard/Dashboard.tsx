import { Box, Card, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { advocacyDashboardCardsData } from '.'
import HorizaontalTabs from '@root/components/HorizaontalTabs'
import PieChart from './charts/PieChart'
import BarChart from './charts/BarChart'
import { InfoIcon } from '@root/theme/overrides/CustomIcons'
import { chartTitles } from './charts'
import { useDashboard } from './useDashboard'

const Dashboard = () => {
    const { showChildStatistics, setShowChildStatistics, showCarerStatistics, setShowCarerStatistics, router } = useDashboard();


    return (
        <>
            <Grid container spacing={3} mb={3}>
                {advocacyDashboardCardsData?.map((item, index) => (
                    <Grid item xs={12} xl={4} key={index}>
                        <Box onClick={() => router.push(item?.link)} sx={{ background: item?.bgColor, padding: "25px 20px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                            <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}>{item?.text}</Typography>
                            <Image width={40} height={40} src={item?.icon} alt="icon" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={3}>
                <Grid item xl={6} lg={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card sx={styles.cardStyles}>
                                <HorizaontalTabs
                                    tabsDataArray={["Total Advocacy by Carer - Pie Chart", "Total Advocacy by Carer - Bar Chart"]}
                                    variant="fullWidth"
                                    spacing={0}
                                >
                                    <PieChart />
                                    <BarChart />
                                </HorizaontalTabs>
                                <Box sx={styles.iconStyles}>
                                    <InfoIcon
                                        sx={{ width: "16px", height: "16px", color: "#0E918C" }}
                                        onClick={() => setShowChildStatistics(!showChildStatistics)}
                                    />
                                </Box>
                                {showChildStatistics && (
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
                                                                flexShrink: 0
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
                    </Grid>
                </Grid>
                <Grid item xl={6} lg={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card sx={styles.cardStyles}>
                                <HorizaontalTabs
                                    tabsDataArray={["Total Advocacy by Child - Pie Chart", "Total Advocacy by Child - Bar Chart"]}
                                    variant="fullWidth"
                                    spacing={0}
                                >
                                    <PieChart />
                                    <BarChart />
                                </HorizaontalTabs>
                                <Box sx={styles.iconStyles}>
                                    <InfoIcon
                                        sx={{ width: "16px", height: "16px", color: "#0E918C" }}
                                        onClick={() => setShowCarerStatistics(!showCarerStatistics)}
                                    />
                                </Box>
                                {showCarerStatistics && (
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
                                                                flexShrink: 0
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
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Dashboard

const styles = {
    nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
    cardStyles: {
        position: "relative",
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
    },
    iconStyles: {
        position: "absolute",
        top: { lg: "20%", sm: "14%", xs: "12%" },
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
        overflowY: "auto"
    },
    statisticsHeading: {
        padding: "9px 0",
        fontSize: "14px",
        fontWeight: "500",
        borderBottom: "3px solid #0E918C",
    },
}
