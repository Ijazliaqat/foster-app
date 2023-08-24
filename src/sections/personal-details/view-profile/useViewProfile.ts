import React from "react";
import { useGetUserProfileQuery } from "@root/services/userApi";
import { useTheme } from "@mui/material";

export const useViewProfile = () => {
  const theme: any = useTheme();
  const { data, isLoading }: any = useGetUserProfileQuery();
  return {
    theme,
    data,
    isLoading,
  };
};
