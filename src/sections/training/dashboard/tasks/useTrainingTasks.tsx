import { useTheme } from "@emotion/react";

export const useTrainingTasks = () => {
  const theme: any = useTheme();


  return {
    theme,
  }
}