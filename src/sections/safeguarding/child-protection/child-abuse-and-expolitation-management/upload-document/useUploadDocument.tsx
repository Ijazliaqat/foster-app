import { useState } from "react";

export const useUploadDocument = () => {

  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return {
    openModal,
    deleteModal,
    handleDeleteModal,
    handleOpenModal,
    onSubmit
  }
}