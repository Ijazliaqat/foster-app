import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLaPoliciesAgreement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [actionType, setActionType] = useState("add");
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
