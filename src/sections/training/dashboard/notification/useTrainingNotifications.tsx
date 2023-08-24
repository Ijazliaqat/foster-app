import { useTheme } from "@mui/material";

export const useTrainingNotifications = () => {
  const theme: any = useTheme();
  return {
    theme,
  }
}