import { Button, Grid, Tab, Tabs } from "@mui/material";
import WorkExperience from "./work-experince/WorkExperience";
import Unemployement from "./unemployment/Unemployement";
import { ChangeEvent, FC, useCallback, useState } from "react";
const tabs = [
  { label: "Work Experience", value: "work" },
  { label: "Unemployement Period", value: "unemployement" },
];
const WorkExperienceUnemployment: FC<any> = ({ activateNextForm }) => {
  const [currentTab, setCurrentTab] = useState<string>("work");
  const handleTabsChange = useCallback(
    (event: ChangeEvent<{}>, value: string): void => {
      setCurrentTab(value);
    },
    []
  );
  return (
    <Grid container direction="column">
      {/* tabs  */}
      <Grid item sm={12}>
        <Tabs
          indicatorColor="primary"
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="primary"
          value={currentTab}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Grid>
      {currentTab === "work" && <WorkExperience />}
      {currentTab === "unemployement" && <Unemployement />}
      <Grid item>
        <Button variant="contained" onClick={activateNextForm}>
          continue
        </Button>
      </Grid>
    </Grid>
  );
};

export default WorkExperienceUnemployment;
