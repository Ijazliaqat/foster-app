import { useState } from "react";

export const useSetup = () => {
  const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleAction = (action: string, row: any) => {
    if (action === 'view') {
      setDisabled(!disabled);
      setOpenModal(!openModal)
    };
    if (action === 'edit') {
      setDisabled(false);
      setOpenModal(!openModal)
    };
    if (action === 'delete') setDeleteModal(!deleteModal);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setDisabled(false);
  };
  const handleDeleteModal = () => setDeleteModal(!deleteModal);

  const handleDeleteFunc = () => setDeleteModal(!deleteModal);

  return {
    disabled,
    openModal,
    handleOpenModal,
    deleteModal,
    handleDeleteModal,
    handleAction,
    handleDeleteFunc
  };
};
