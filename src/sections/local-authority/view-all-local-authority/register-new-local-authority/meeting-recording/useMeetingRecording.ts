import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useMeetingRecording = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [actionType, setActionType] = useState<string>("add");
  const route = useRouter()
  const theme = useTheme();
  return {
    theme,
    isAddModalOpen,
    setIsAddModalOpen,
    actionType,
    setActionType,
    route
  };
};
