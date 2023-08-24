import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useBulkOperationsTable = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const theme: any = useTheme();
  const router = useRouter();

  const handleDeleteModal = () => setIsDeleteModal(!isDeleteModal);

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "edit":
        router.push({
          pathname: `/system-admin/bulk-operations/personal-details/${id}`,
          query: `action=${action}`,
        });
        break;
      case "delete":
        handleDeleteModal();
        break;
      case "view":
        router.push({
          pathname: `/system-admin/bulk-operations/personal-details/${id}`,
          query: `action=${action}`,
        });
        break;
      default:
        break;
    }
  };

  return {
    isShareModalOpen,
    setIsShareModalOpen,
    isDeleteModal,
    setIsDeleteModal,
    handleAction,
    theme,
    router,
  };
};
