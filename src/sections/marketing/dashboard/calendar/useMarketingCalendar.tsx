import { useTheme } from "@mui/material";

export const useMarketingCalendar = () => {
  const theme: any = useTheme();
  return {
    theme,
  }
}