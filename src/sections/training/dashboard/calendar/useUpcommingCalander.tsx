import { useTheme } from "@mui/material";

export const useUpcommingCalander = () => {
  const theme: any = useTheme();
  return {
    theme,
  }
}