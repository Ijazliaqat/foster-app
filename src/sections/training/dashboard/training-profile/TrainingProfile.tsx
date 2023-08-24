import { Card, Typography } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React from "react";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import { useTrainingProfile } from "./useTrainingProfile";

const TrainingProfile = () => {
  const { selectedChart, setSelectedChart, theme } = useTrainingProfile();
  return (
    <Card sx={styles.cardStyles}>
      <Typography
        style={{
          fontSize: "18px",
          fontWeight: "600",
          padding: "16px",
          paddingBottom: "0",
          color: theme.palette.primary.main,
        }}
      >
        Training Profile
      </Typography>
      <HorizaontalTabs
        tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}
      >
        {[1, 2, 3].map((item: any, index: any) => {
          return selectedChart === "pie" ? (
            <PieChart
              key={index}
              selectedChart={selectedChart}
              setSelectedChart={setSelectedChart}
            />
          ) : (
            <BarChart
              key={index}
              selectedChart={selectedChart}
              setSelectedChart={setSelectedChart}
            />
          );
        })}
      </HorizaontalTabs>
    </Card>
  );
};

export default TrainingProfile;

const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  cardStyles: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
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
  profileCardHeading: {},
};
