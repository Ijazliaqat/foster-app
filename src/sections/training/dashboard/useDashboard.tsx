import { useTheme } from "@mui/material";

export const useDashboard = () => {
  const theme = useTheme();
  return {
    theme,
  };
};
