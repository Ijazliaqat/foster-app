import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useViewAllLocalAuthority = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const theme = useTheme();
  const navigate = useRouter();
  const pathname = `/local-authority/local-authority-tab/view-all-local-authority/register-local-authority`
  return {
    theme,
    navigate,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    pathname
  };
};
