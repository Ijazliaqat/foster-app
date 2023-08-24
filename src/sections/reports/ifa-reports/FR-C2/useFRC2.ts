import { useRouter } from "next/router";
import { useState } from "react";

export const useFRC2 = () => {
  const router = useRouter();
  const path = '/reports/ifa-reports/FR-C2-young-person-living-in-household-comments/form';
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = () => setDeleteModal(!deleteModal);

  const handleSearch = () => { };
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case 'add':
        router.push({ pathname: path })
        break;
      case 'edit':
        router.push({ pathname: `${path}/${id}`, query: { action: 'edit' } })
        break;
      case 'view':
        router.push({ pathname: `${path}/${id}`, query: { action: 'view' } })
        break;
      case 'delete':
        handleDeleteModal();
        break;
      case 'print':
        window.print();
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