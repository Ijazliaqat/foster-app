import { useTheme } from "@mui/material";
import { DeRegInitialRequestData } from "./index";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useDeRegInitialRequest: any = () => {
  const router = useRouter();
  const [deRegisterData, setDeRegisterData] = useState(DeRegInitialRequestData);
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [openSocialWorkerAsessmentDialogbox, setOpenSocialWorkerAssessmentDialogbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const handleDisabled = () => setDisabled(!disabled);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deRegisterData.length);
  };
  const handleViewChecklist = () => router.push('/de-registration/deregister-foster-carer/sw-assessment');

  const handleSlide = () => {
    
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
    isUpdating: false,
    hasUpdated: false,
    setDeRegisterData,
    currentIndex,
    setCurrentIndex,
    goToNextSlide,
    disabled,
    handleDisabled,
    handleViewChecklist,
    handleSlide
  };
};
