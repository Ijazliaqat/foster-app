import { Box, Button, CircularProgress, Grid, Skeleton } from "@mui/material";
import React, { Fragment } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "@root/components/Image";
import { useDeregAssessmentStageCarer } from "./useDeregAssessmentStageCarer";
import Link from "next/link";
import ArrowLeftSharpIcon from "@mui/icons-material/ArrowLeftSharp";
import { RecruitmentStatusDropdown } from "@root/sections/recruitment/recruitment-status-dropdown/recruitment-status-dropdown";
import { AssignedFormDialogbox } from "@root/sections/recruitment/assigned-form-dialogbox/AssignedFormDialogbox";
import SocialWorkerFormDialogbox from "@root/sections/recruitment/enquiry-stage/social-worker-form-dialogbox/SocialWorkerFormDialogbox";
import { DeRegInfoDialogbox } from "../dereg-info-dialogbox/deRegInfoDialogbox";
import LeftIcon from "../../../../assets/svg/de-register/left-icon.svg"
import ReviewReportDialogbox from "./review-report-dialogbox/ReviewReportDialogbox";

const DeregAssessmentStageCarer = () => {
  const {
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
    goToNextSlide,
    handleReviewReport,
    handleSubmit,
    methods,
    onSubmit
  } = useDeregAssessmentStageCarer();

  return (
    <>
      <Grid container>
        {deRegisterData?.map((ele: any, ind: any) => (
          <Grid
            key={ele?.id}
            container
            p={1}
            sx={{
              borderBottom: "1px solid black",
              bgcolor: theme.palette.mode === "light" ? "white" : "silver",
            }}
          >
            <Grid item container mt={1} direction={"column"} alignItems={"center"} lg={2.3} xs={12} pt={1} sx={{ position: "relative" }}>
              <Image src={ele?.imgIcon} alt={ele?.text} />
              <InfoOutlinedIcon
                onClick={() => setOpenIdForInfo(ele?.id)}
                sx={{
                  position: "absolute",
                  right: "22px",
                  fontSize: 18,
                  cursor: "pointer",
                  color: "black",
                }}
              />
              <DeRegInfoDialogbox
                handleClose={() => {
                  setOpenIdForInfo("");
                }}
                open={openIdForInfo === ele?.id}
                informationText={ele?.informationText}
                informationIconData={ele?.informationIcon}
              />

              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  paddingTop: 7,
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                {ele?.text}
              </span>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              lg={1.5}
              xs={12}
            >
              <ArrowLeftSharpIcon sx={{ fontSize: 35 }} />
            </Grid>
            <Grid container alignItems={"center"} justifyContent={"center"} item lg={2.3} xs={12}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {Array.isArray(ele.viewForms) ? (
                  <>
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      {ele.viewForms[currentIndex]}
                    </span>
                    <Image
                      src={LeftIcon}
                      alt=""
                      style={{ marginLeft: "20px", cursor: "pointer" }}
                      onClick={goToNextSlide}
                    />
                  </>
                ) : (
                  <>
                    {ele?.href ? (
                      <Link
                        href={ele?.href}
                        passHref
                        style={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          fontSize: 14,
                          cursor: "pointer",
                          textAlign: "center",
                          textDecoration: "none",
                        }}
                      >
                        {ele?.viewForms}
                      </Link>
                    ) : <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                      onClick={() => handleReviewReport(ele?.id)}
                    >
                      {ele.viewForms}
                    </span>}
                  </>
                )}
              </Box>
            </Grid>
            <Grid my={1} container alignItems={"center"} justifyContent={"center"} item lg={3.6} md={6} xs={12}>
              <RecruitmentStatusDropdown
                status={ele?.status}
                component={"EnquiryStage"}
                setEnquiryStageData={setDeRegisterData}
                enquiryStageData={deRegisterData}
              />
            </Grid>
            <Grid container alignItems={"center"} justifyContent={"center"} item lg={2.3} md={6} xs={12}>
              <Button onClick={() => setFormDialogId(ele?.id)} variant="contained">
                Assigned To
              </Button>
              <AssignedFormDialogbox
                handleCloseForm={() => {
                  setFormDialogId("");
                }}
                component={"Enquiry Stage"}
                openFormDialog={formDialogId === ele?.id}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <ReviewReportDialogbox isReviewReportModalOpen={isReviewReportModalOpen} setIsReviewReportModalOpen={setIsReviewReportModalOpen} handleSubmit={handleSubmit} methods={methods} onSubmit={onSubmit} />
    </>
  );
};
export default DeregAssessmentStageCarer;
