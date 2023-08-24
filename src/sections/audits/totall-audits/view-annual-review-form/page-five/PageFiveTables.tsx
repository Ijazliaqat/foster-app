import React from "react";
import TrainingDetailsTable from "./training-details-table/TrainingDetailsTable";
import { Box } from "@mui/material";
import PlacementsTable from "./placements-table/PlacementsTable";

const PageFiveTables = () => {
  const placementTablesData = [
    {
      tableTitle: "PLACEMENTS",
      tableData: [],
    },
    {
      tableTitle: "RESPITE PLACEMENTS",
      tableData: [],
    },
    {
      tableTitle: "TRANSFER PLACEMENTS",
      tableData: [],
    },
  ];
  return (
    <Box sx={{ padding: "5px 30px" }}>
      <Box sx={{ mb: 4 }}>
        <TrainingDetailsTable />
      </Box>
      {placementTablesData.map((item: any, index: number) => (
        <Box sx={{ mt: 4 }} key={index}>
          <PlacementsTable data={item?.tableData} title={item?.tableTitle} />
        </Box>
      ))}
    </Box>
  );
};

export default PageFiveTables;
