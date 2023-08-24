import React, { useState } from "react";
import { chartTitles } from ".";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { Box, Typography } from "@mui/material";
import { InfoIcon } from "@root/theme/overrides/CustomIcons";
import HorizaontalTabs from "@root/components/HorizaontalTabs";

// ============================================================

const CarerCharts = () => {
  const [showStatistics, setShowStatistics] = useState(false);
  return (
    <Box sx={{ position: "relative" }}>
      <HorizaontalTabs tabsDataArray={["Total Advocacy by Carer - Pie Chart", "Total Advocacy by Carer - Bar Chart"]} variant="fullWidth" spacing={0}>
        <PieChart />
        <BarChart />
      </HorizaontalTabs>
      <Box sx={styles.iconStyles}>
        <InfoIcon sx={{ width: "16px", height: "16px", color: "#0E918C" }} onClick={() => setShowStatistics(!showStatistics)} />
      </Box>
      {showStatistics && (
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
                      width: "14px",
                      height: "14px",
                      background: item?.color,
                      borderRadius: "4px",
                      flexShrink: 0,
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
    </Box>
  );
};

export default CarerCharts;

const styles = {
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
    overflowY: "auto",
  },
  statisticsHeading: {
    padding: "9px 0",
    fontSize: "14px",
    fontWeight: "500",
    borderBottom: "3px solid #0E918C",
  },
};
