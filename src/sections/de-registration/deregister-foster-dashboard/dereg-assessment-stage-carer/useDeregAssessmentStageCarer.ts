import { useTheme } from "@mui/material";
import { DeRegAssessmentStageData, DeRegisterAssessmentStageCarerSchema } from ".";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useDeregAssessmentStageCarer: any = () => {
  const [deRegisterData, setDeRegisterData] = useState(DeRegAssessmentStageData);
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [isReviewReportModalOpen, setIsReviewReportModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deRegisterData.length);
  };

  const handleReviewReport = (id: any) => {
    id === 3 && setIsReviewReportModalOpen(true);
  };

  const methods: any = useForm({
    resolver: yupResolver(DeRegisterAssessmentStageCarerSchema),
    defaultValues: { updatePhoto: "" },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = () => {
    setIsReviewReportModalOpen(false)
  }

  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    isReviewReportModalOpen,
    setIsReviewReportModalOpen,
    deRegisterData,
    setDeRegisterData,
    currentIndex,
    setCurrentIndex,
    goToNextSlide,
    handleReviewReport,
    handleSubmit,
    methods,
    onSubmit
  };
};
