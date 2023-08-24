import * as React from "react";
import { Children, ReactNode, useState, SyntheticEvent } from "react";
import { Tabs, Tab, Typography, useTheme, Box, Card, Grid } from "@mui/material";
import AddIcon from "../../assets/svg/policy-guidelines/add-icon.svg";
import Image from "next/image";

// ----------------------------------------------------------------------

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
  children: ReactNode;
  setActiveTab?: any;
  handleAddTabs?: any;
  accordianChild?: Boolean;
}

const PolicyVerticalTabs = ({ tabsDataArray, children, setActiveTab, handleAddTabs, accordianChild, ...other }: IVERTICALTABSPROPS) => {
  const [value, setValue] = useState<any>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);
  const theme: any = useTheme();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3.5} xs={12}>
          <Box sx={styles.GridWrapper}>
            <Box sx={styles.imageWrapper} onClick={handleAddTabs}>
              <Image src={AddIcon} alt="add-icon" />
            </Box>
            <Box sx={{ maxHeight: "72vh", overflowY: "auto" }}>
              <Tabs
                selectionFollowsFocus
                orientation="vertical"
                variant="scrollable"
                sx={styles.tabRoot}
                TabIndicatorProps={styles.tabIndicator}
                value={value}
                role="tabpanel"
                onChange={handleChange}
              >
                {tabsDataArray?.map((item: any) => (
                  <Tab
                    wrapped
                    key={item?.title}
                    sx={styles.innerTabs(theme)}
                    label={
                      <Box sx={styles.tabLabel(item?.background)}>
                        <Box sx={styles.tabsIcon}>
                          <Image src={item.img} alt="" width={20} height={20} />
                         
                        </Box>
                        <Typography variant="h5" component="h5" sx={styles.tabsTitle}>
                          {item?.title.length > 46 ? `${item.title.slice(0, 46)}...` : item.title}
                        </Typography>
                      </Box>
                    }
                  />
                ))}
              </Tabs>
            </Box>
          </Box>
        </Grid>

        <Grid item md={8.5} xs={12} >
          {tabsDataArray?.map((item: any) => (
            <div
              role="tabpanel"
              key={item?.title}
              hidden={value !== item?.index}
              id={`vertical-tabpanel-${item?.index}`}
              aria-labelledby={`vertical-tab-${item?.index}`}
              {...other}
            >
              {!accordianChild ? (
                <Box>
                  {arrayChildren?.map((child, index) => (
                    <Box key={index}>{value === index && child}</Box>
                  ))}
                </Box>
              ) : (
                arrayChildren?.map((child, index) => <Box key={index}>{value === index && child}</Box>)
              )}
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default PolicyVerticalTabs;
// ----------------------------------------------------------------------
// Styles
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

  imageWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    paddingBottom: "10px",
    cursor: "pointer",
  },

  tabLabel: (background: string) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 3,
    padding: "12px",
    gap: "15px",
    height: "100%",
    minHeight: "85px",
  }),

  innerTabs: (theme: any) => ({
    background: theme.palette.primary.main,
    mb: "15px",
    borderRadius: "10px",
    border: `6px solid ${theme.palette.primary.main}`,
    height: "100%",
    minHeight: "80px",
    "&.Mui-selected": {
      width: "100% !important",
      border: "6px solid #FFFFFF",
      height: "100%",
      minHeight: "80px",
    },
  }),
  GridWrapper: {
    background: "linear-gradient(270deg, rgba(34, 171, 113, 0.13) 6.52%, rgba(43, 182, 101, 0.13) 100%)",
    boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    width: "100%",
    p: "10px",
    m: "0",
  },
  tabsIcon: {
    width: "52px",
    height: "52px",
    boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  tabsTitle: {
    fontSize: "18px !important",
    color: "#Ffff",
    lineHeight: "24px !important",
    fontWeight: 600,
    textAlign: "left !important",
  }
};
