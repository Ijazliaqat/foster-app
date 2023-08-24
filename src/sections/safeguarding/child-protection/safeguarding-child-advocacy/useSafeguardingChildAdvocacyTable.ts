import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useSafeguardingChildAdvocacyTable = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const theme: any = useTheme();
  let router = useRouter();
  
  return {
    isShareModalOpen,
    setIsShareModalOpen,
    isDeleteModal,
    setIsDeleteModal,
    theme,
    router
  };
};
