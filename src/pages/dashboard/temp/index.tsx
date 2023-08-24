import { useCallback, useState } from "react";
import type { ChangeEvent } from "react";
import Page from "@root/components/Page";
import {
  Box,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import InterestForm from "@root/sections/carer-info/personal-info/initial-home-visit/interest/InterestForm";
import BackgroundForm from "@root/sections/carer-info/personal-info/initial-home-visit/background/BackgroundForm";
import Assesment from "@root/sections/carer-info/personal-info/initial-home-visit/assesment/AssesmentForm";
import Document from "@root/sections/carer-info/personal-info/initial-home-visit/document/Document";
const tabs = [
  { label: "Primary Carer", value: "primary" },
  { label: "interest", value: "interest" },
  { label: "Background", value: "background" },
  { label: "Assesment", value: "assesment" },
  { label: "Documents", value: "documents" },
];
const Index = () => {
  const [currentTab, setCurrentTab] = useState<string>("primary");
  const handleTabsChange = useCallback(
    (event: ChangeEvent<{}>, value: string): void => {
      setCurrentTab(value);
    },
    []
  );
  return (
    <>
      <Page title="Initial Home Visit">
        <Stack spacing={3} sx={{ mb: 3 }}>
          <div>
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
            <Divider />
          </div>
        </Stack>
        {currentTab === "interest" && <InterestForm />}
        {currentTab === "background" && <BackgroundForm />}
        {currentTab === "assesment" && <Assesment />}
        {currentTab === "documents" && <Document />}
      </Page>
    </>
  );
};

export default Index;
