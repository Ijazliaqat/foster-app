import React, {
  ReactNode,
  Children,
} from "react";
import { Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTheme } from "@mui/material";

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
  children: ReactNode;
  currentTab:number;
  handleTabChange:any
}

export default function ChildInfoTabs({
  tabsDataArray,
  children,
  currentTab,
  handleTabChange,
  ...other
}: IVERTICALTABSPROPS) {
  // const { value, setValue, handleChange } = useChildInfoTabs();

  const theme = useTheme();
  // useEffect(() => {
  //   console.log("Changed", value);
  // }, [value]);
  const arrayChildren = Children.toArray(children);
  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12}  lg={3} >
        <Card sx={{ padding: "10px" }}>
          <Box style={{ color: theme.palette.primary.main }} sx={styles.title}>
            Child Information
          </Box>
          <Tabs
            selectionFollowsFocus
            orientation="vertical"
            variant="scrollable"
            sx={styles.tabRoot}
            TabIndicatorProps={styles.tabIndicator}
            value={currentTab}
            onChange={handleTabChange}
          >
            {tabsDataArray?.map((item: any) => (
              <Tab
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  textTransform: "none",
                  whiteSpace: "normal",
                  minWidth: 0,
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minHeight: "32px",
                  "&.Mui-selected": {
                    color: theme.palette.primary.main,
                  },
                }}
                wrapped
                key={item?.title}
                label={
                  <>
                    <Box
                      sx={{
                        color: "black",
                        pointerEvents: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                      }}
                    >
                      {item?.Label}
                    </Box>
                    <Box
                      sx={{
                        // marginLeft: "-100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                      }}
                    >
                      <ArrowRightIcon /> <span>{item?.title}</span>
                    </Box>
                  </>
                }
              />
            ))}
          </Tabs>
        </Card>
      </Grid>
      <Grid item xs={12} lg={9} >
        {tabsDataArray?.map((item: any) => (
          <div
            role="tabpanel"
            key={item?.title}
            hidden={currentTab !== item?.index}
            id={`vertical-tabpanel-${item?.index}`}
            aria-labelledby={`vertical-tab-${item?.index}`}
            {...other}
          >
            <Card sx={styles.tabPanelContainer}>
              {arrayChildren?.map((child: any, index: any) => (
                <Box key={index}>{currentTab === index && child}</Box>
              ))}
            </Card>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

const styles = {
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
    // display: "flex",
    // justifyContent: "center",
    // width: "100%",
    // borderRadius: 3,
    // padding: "20px",
  }),

  tabPanelContainer: {
    minHeight: "160px",
    overflow: "auto",
    borderRadius: "10px",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    padding: "40px",
  },

  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "18px",
    // color: theme.palette.primary.main
  },
};
