import * as React from "react";
import { Children, ReactNode, useState, SyntheticEvent } from "react";
import { Tabs, Tab, Typography, useTheme, Grid, Box, Card } from "@mui/material";

// ----------------------------------------------------------------------

interface IVERTICALTABSPROPS {
    tabsDataArray: Array<Object>;
    children: ReactNode;
}

// ----------------------------------------------------------------------

export default function PanelTab({ tabsDataArray, children, ...other }: IVERTICALTABSPROPS) {
    const [value, setValue] = useState(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const arrayChildren = Children.toArray(children);

    const theme: any = useTheme();

    return (
        <Grid container spacing={2} sx={styles.container}>
            <Grid item xs={12} lg={2}>
                <Tabs
                    selectionFollowsFocus
                    orientation="vertical"
                    variant="scrollable"
                    sx={styles.tabRoot}
                    TabIndicatorProps={styles.tabIndicator}
                    value={value}
                    onChange={handleChange}
                >
                    {tabsDataArray?.map((item: any) => (
                        <Tab
                            wrapped
                            key={item?.title}
                            sx={{ mb: 2 }}
                            label={
                                <Box sx={styles.tabLabel(item?.background)}>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        color={"#fff"}
                                        sx={{ fontSize: "22px", fontWeight: "600" }}
                                    >
                                        {item?.title}
                                    </Typography>
                                </Box>
                            }
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={12} lg={10}>
                {tabsDataArray?.map((item: any) => (
                    <div
                        role="tabpanel"
                        key={item?.title}
                        hidden={value !== item?.index}
                        id={`vertical-tabpanel-${item?.index}`}
                        aria-labelledby={`vertical-tab-${item?.index}`}
                        style={{ position: 'relative' }}
                        {...other}
                    >
                        <Card sx={styles.tabPanelContainer}>
                            <div style={styles.topBar(item?.background)}></div>
                            {arrayChildren?.map((child, index) => (
                                <Box key={index}>{value === index && child}</Box>
                            ))}
                        </Card>
                    </div>
                ))}
            </Grid>
        </Grid>
    );
}

// Styles
const styles: any = {
    container: {
        display: { xs: "block", md: "flex" },
    },

    tabRoot: {
        "& .MuiTab-root": {
            marginRight: "0px !important",
            maxWidth: "unset !important",
            width: "100% !important",
        },
    },

    tabIndicator: {
        sx: { display: "none" },
    },

    tabLabel: (background: string) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        height: 98,
        background: `${background}`,
        borderRadius: '10px',
        padding: "20px",
        boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
    }),

    tabPanelContainer: {
        minHeight: "160px",
        borderRadius: "10px",
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        p: "20px",
        pt: '40px',
        height: '100%',
        overflow: 'hidden'
    },
    topBar: (bg: string) => ({
        position: 'absolute',
        width: '100%',
        top: '0px',
        left: '0px',
        background: bg,
        height: '14px',
    }),
};
