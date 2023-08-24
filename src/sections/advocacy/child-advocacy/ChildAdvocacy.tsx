import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { SELECT_FILTERS, data, upcomingMeetingsData } from '.';
import { useChildAdvocacy } from './useChildAdvocacy';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import HorizaontalTabs from '@root/components/HorizaontalTabs';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
import { InfoIcon } from '@root/theme/overrides/CustomIcons';
import { chartTitles } from './charts';

const ChildAdvocacy = () => {
    const { columns, theme, tableHeaderRefThree, expand, setExpand, showChildStatistics, setShowChildStatistics, } = useChildAdvocacy();

    const dataArray = !expand ? upcomingMeetingsData?.slice(0, 4) : upcomingMeetingsData;

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card sx={{ p: 1 }}>
                    <TableHeader
                        ref={tableHeaderRefThree}
                        title=" Foster Child List"
                        searchKey="search"
                        showSelectFilters
                        selectFilters={SELECT_FILTERS}
                        onChanged={(data: any) => {
                            console.log("Updated params: ", data);
                        }}
                    />
                    <CustomTable
                        data={data}
                        columns={columns}
                        isLoading={false}
                        isFetching={false}
                        isError={false}
                        isSuccess={true}
                        isPagination={false}
                        onSortByChange={(data: any) => {
                            console.log("Sort by: ", data);
                        }}
                        rootSX={{ mt: theme.spacing(2) }}
                    />
                </Card>
            </Grid>
            <Grid item xl={5} xs={12}>
                <Card sx={{ p: 1.5 }}>
                    <Typography color="#0E918C" fontWeight="600" fontSize="18px">Upcoming Meetings</Typography>
                    <Box sx={{ maxHeight: expand ? '240px' : "250px", overflowY: "scroll" }} >
                        {dataArray.map((card: any,index:number) => (
                            <Box display='flex' gap='15px' key={index} alignItems='center' mt="22px">
                                <Box sx={styles.listBatch}></Box>
                                {<Typography color={theme.palette.mode} fontWeight="500">{card.title}</Typography>}
                            </Box>

                        ))}
                    </Box>
                    <Box display="flex" flexWrap="wrap" justifyContent="flex-end" marginTop="10px">
                        {(upcomingMeetingsData?.length > 4) && <IconButton onClick={() => { setExpand(!expand) }} sx={{ background: "rgba(19,15,38,0.5)", color: "white", padding: "0", "&:hover": { background: "rgba(19,15,38,0.5)" } }}>
                            {expand ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>}
                    </Box>
                </Card>
            </Grid>
            <Grid item xl={7} xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
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
        </Grid>

    )
}

export default ChildAdvocacy

const styles = {
    listBatch: {
        flexShrink: 0, backgroundColor: '#0E918C', height: '15px', width: '15px', borderRadius: "3px"
    },
    nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
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
