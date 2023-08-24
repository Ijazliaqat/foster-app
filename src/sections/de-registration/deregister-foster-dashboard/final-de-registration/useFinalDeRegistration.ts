import { useTheme } from "@mui/material";
import { DeRegContractsAgreementsData } from "./index";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const useFinalDeRegistration: any = () => {
  const [deRegisterData, setDeRegisterData] = useState(DeRegContractsAgreementsData);
  const [isSuccessfullyModalOpen, setIsSuccessfullyModalOpen] = useState(false);
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [openSocialWorkerAsessmentDialogbox, setOpenSocialWorkerAssessmentDialogbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewResignationByFosterCarers, setViewResignationByFosterCarers] = useState(false)
  const theme: any = useTheme();
  const route = useRouter();

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deRegisterData.length);
  };

  const handleViewFormModal = (id: any) => {
    if(id === 3) {
      setIsSuccessfullyModalOpen(true)
    } else if (id === 2){
      setViewResignationByFosterCarers(true)
    }
  }


  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
    deRegisterData,
    setDeRegisterData,
    currentIndex,
    setCurrentIndex,
    goToNextSlide,
    isSuccessfullyModalOpen,
    setIsSuccessfullyModalOpen,
    viewResignationByFosterCarers,
    setViewResignationByFosterCarers,
    handleViewFormModal,
    route
  };
};
