import { usePatchEnquiryStageStatusMutation } from "@root/services/recruitment/enquiry-stage/enquiryStage";
import React, { useEffect } from "react";
import { optionData } from ".";
import { usePatchStageOneStatusMutation } from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import { usePatchStageTwoStatusMutation } from "@root/services/recruitment/assessment-stage-two/assessmentStageTwoApi";
import { usePatchReadyForPlacementStatusMutation } from "@root/services/recruitment/ready-for-placement/readyForPlacementApi";

export const useRecruitmentStatusDropdown = ({
  id,
  status,
  textForApi,
  setMockData,
  component,
  mockData,
}: any) => {
  const [enquiryStagePatchData, { isLoading: isUpdatingEnquiryStage }] =
    usePatchEnquiryStageStatusMutation({});
  const [
    assessmentStageOnePatchData,
    { isLoading: isUpdatingAssessmentStageOne },
  ] = usePatchStageOneStatusMutation({});

  const [
    assessmentStageTwoPatchData,
    { isLoading: isUpdatingAssessmentStageTwo },
  ] = usePatchStageTwoStatusMutation({});

  const [
    readyForPlacementPatchData,
    { isLoading: isUpdatingReadyForPlacement },
  ] = usePatchReadyForPlacementStatusMutation({});

  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(
    optionData.findIndex((x) => x.text === status)
  );
  useEffect(() => {
    setSelectedIndex(optionData?.findIndex((x) => x?.text === status));
  }, [status]);

  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    const x = optionData?.find((ele: any, ind: any) => ind === index);
    const patchObj = {
      point: textForApi,
      status: x?.text,
    };
    setMockData(
      mockData?.map((item: any) => ({
        ...item,
        status: item?.textForApi === textForApi ? x?.text : item?.status,
      }))
    );

    switch (component) {
      case "EnquiryStage":
        return (
          enquiryStagePatchData({
            userId: id,
            body: patchObj,
          }) && setOpen(false)
        );
      case "AssessmentStage1":
        return (
          assessmentStageOnePatchData({
            userId: id,
            body: patchObj,
          }) && setOpen(false)
        );
      case "AssessmentStage2":
        return (
          assessmentStageTwoPatchData({
            userId: id,
            body: patchObj,
          }) && setOpen(false)
        );
      case "ReadyForPlacement":
        readyForPlacementPatchData({
          userId: id,
          body: patchObj,
        }) && setOpen(false);

      // default: setOpen(false);
    }
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return {
    open,
    setOpen,
    selectedIndex,
    setSelectedIndex,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    optionData,
    isUpdatingEnquiryStage,
    isUpdatingAssessmentStageOne,
    isUpdatingAssessmentStageTwo,
    isUpdatingReadyForPlacement,
  };
};
