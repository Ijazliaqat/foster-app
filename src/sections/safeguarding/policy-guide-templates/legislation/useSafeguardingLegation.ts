import { useTheme } from "@mui/material";

export const useSafeguardingLegation = () => {
  const theme: any = useTheme();
  return {
    theme,
  };
};
