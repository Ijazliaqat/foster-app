import { Box, Card, Grid, Typography, alpha } from "@mui/material";
import { PROFILETABS_DATA } from "./ProfilePreviewData";
import { useTheme } from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import ProfileDetails from "./ProfileDetails";
import About from "../profile-preview/about/About";
import BackgroundChecks from "./background-checks/BackgroundChecks";
import OtherInformation from "./other-information/OtherInformation";
import TrainingWork from "./training-work/TrainingWork";
import Reference from "@root/sections/personal-details/profile-preview/references/References";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ProfilePreview = () => {
  const theme: any = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid container columnSpacing={4} sx={{ mt: 2 }}>
      <Grid item xs={12} md={3}>
        <Card
          sx={{
            boxShadow: theme.shadows[5],
          }}
        >
          {/* Profile Details Component */}
          <ProfileDetails />
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              sx: {
                left: 0,
                border: 2,
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            {PROFILETABS_DATA?.map((item: any) => (
              <Tab
                key={item?.title}
                sx={{
                  "&.Mui-selected": {
                    background: alpha(theme.palette.primary.main, 0.15),
                    minWidth: "100%",
                  },
                  py: 2,
                  pl: 3,
                  alignItems: "flex-start",
                  mb: 0.5,
                }}
                label={
                  <Typography variant="subtitle2" component={"p"}>
                    {item?.title}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </Card>
      </Grid>
      <Grid item xs={12} md={9}>
        <Card
          sx={{
            boxShadow: theme.shadows[5],
          }}
        >
          <TabPanel value={value} index={0}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reference />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TrainingWork />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <BackgroundChecks />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <OtherInformation />
          </TabPanel>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfilePreview;
