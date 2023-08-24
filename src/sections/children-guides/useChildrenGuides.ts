import { useState } from "react";

export const useChildrenGuides = () => {
  const [addModal, setAddModal] = useState(false);
  const [pdfModal, setPdfModal] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const handleModal = () => setAddModal(!addModal);

  const handleOpenPdfModal = (file: any) => {
    setPdfModal(true);
    setPdfFile(file);
  };

  const handleClosePdfModal = () => {
    setPdfModal(false);
    setPdfFile(null);
  }
  return {
    addModal,
    pdfFile,
    pdfModal,
    handleModal,
    handleOpenPdfModal,
    handleClosePdfModal
  }
}