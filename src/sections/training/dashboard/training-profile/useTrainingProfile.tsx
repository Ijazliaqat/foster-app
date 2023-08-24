import { useTheme } from "@mui/material";
import { useState } from "react";

export const useTrainingProfile = () => {
  const [selectedChart, setSelectedChart] = useState("pie");
  const theme = useTheme();
  return {
    selectedChart,
    setSelectedChart,
    theme,
  };
};
