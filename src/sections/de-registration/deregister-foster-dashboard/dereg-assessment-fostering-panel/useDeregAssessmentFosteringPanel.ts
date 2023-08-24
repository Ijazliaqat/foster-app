import { useTheme } from "@mui/material";
import { DeRegStagePostingPanelData } from "./index";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const useDeregAssessmentFosteringPanel: any = () => {
  const [deRegisterData, setDeRegisterData] = useState(
    DeRegStagePostingPanelData
  );
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
  ] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };
  const route = useRouter();
  const handleSlide = () => {
   
    if (currentIndex === 0) {
      route.push(
        "/de-registration/deregister-foster-carer/proposal-to-teminate"
      );
    } else {
      route.push("/de-registration/deregister-foster-carer/proposal-to-revise");
    }
  };

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
    handleSlide,
  };
};
