import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";
import { Grid } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      // style={{width:"80%"}}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 2, width:"100%" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalSmallTabs({ tabs, children }: any) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (

      <Grid container>
        <Grid item xs={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            centered={true}
            sx={{ borderRight: 1, borderColor: "divider"}}
          >
            {tabs.map((tabs: any, idx: number) => {
              return <Tab key={idx} label={tabs} {...a11yProps(idx)} sx={{marginRight: "50px", alignItems:"start"}}/>;
            })}
          </Tabs>
        </Grid>
        <Grid item xs={10} sx={{width:"80%"}}>
          {children.map((content: any, idx: any) => {
            return (
              <TabPanel key={idx} value={value} index={idx} >
                {content}
              </TabPanel>
            );
          })}
        </Grid>
      </Grid>

  );
}
