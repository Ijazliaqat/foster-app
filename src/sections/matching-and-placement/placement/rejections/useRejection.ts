import { useRouter } from "next/router";
import { useState } from "react";

export const useRejection = () => {
  const router = useRouter();
  const path = '/placement/rejections/form';

  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);

  const handleSearch = () => { };

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case 'add':
        router.push({ pathname: path })
        break;
      case 'edit':
        router.push({ pathname: `${path}/${id}`, query: { action, id } })
        break;
      case 'delete':
        handleDeleteModal();
        break;
      default:
        break;
    }
  };
  return {
    handleSearch,
    handleAction,
    handleDeleteModal,
    deleteModal
  }
}