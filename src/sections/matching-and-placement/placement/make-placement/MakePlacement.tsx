import { Box, Grid, Step, StepContent, StepLabel, Stepper, StepConnector } from "@mui/material";
import { useMakePlacement } from "./useMakePlacement";
import { ArrowDown } from "@root/assets/svg/arrowDown";
import CountDownIcon from "../../../../assets/svg/placement/count-down.svg";
import CloseIcon from "../../../../assets/svg/placement/close-icon.svg";
import { placementStepData } from ".";
import StepIconsButton from "./StepIconsButton";

import Image from "next/image";
import React from "react";

const MakePlacement = () => {
  const { activeStep, handleStep, handleIncreamentStep } = useMakePlacement();


  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear
        orientation="vertical"
        activeStep={activeStep}
        sx={styles.stepperWrapper}
        connector={<StepConnector sx={styles.stepConnectorWrap} />}
      >
        {placementStepData.map((ele: any, index) => {
          
          return (
            <Step key={ele.id} sx={{ pointerEvents: activeStep === index ? 'initial' : 'none' }}>
              <Grid container sx={{ justifyContent: { xl: "space-between", lg: "center", xs: "center" } }}>
                <StepLabel
                  StepIconComponent={() => StepIconsButton(index, ele?.background)}
                ></StepLabel>
                <Grid
                  container
                  xs={11}
                  lg={11}
                  item
                  onClick={() => handleStep(index)}
                  sx={styles.stepContent(ele)}
                >
                  {ele.label}
                  <Image src={activeStep === index ? CountDownIcon : CloseIcon} alt="" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "-31px",
                        display: activeStep === index ? "none" : "block",
                        svg: {
                          "& path": {
                            fill: `${ele.color} !important`,
                          },
                          "& ellipse": {
                            fill: `${ele.color} !important`,
                          },
                        },
                      }}
                    >
                      <ArrowDown />
                    </Box>
                  </div>
                </Grid>
              </Grid>
              <StepContent>
                <Grid container>
                  <Grid
                    item
                    xl={11.46}
                    md={11.6}
                    sm={11.6}
                    xs={11.6}
                    sx={styles.stepActiveContent}
                  >
                    {activeStep === index && <ele.component handleIncreamentStep={handleIncreamentStep} />}
                  </Grid>
                </Grid>
              </StepContent>

            </Step>
          )
        })}
      </Stepper>
    </Box>
  );
};
export default MakePlacement;

const styles = {
  stepperWrapper: { "& .MuiStepContent-root": { marginLeft: { xl: "36px", lg: "20px", xs: "20px" }, borderLeft: { xl: '1px solid #C4CDD5', lg: 'none', xs: "none" } }, },
  stepConnectorWrap: { marginLeft: { xl: "36px !important", lg: "27px", xs: "27px" }, "& .MuiStepConnector-line": { borderLeft: { xl: '1px solid #C4CDD5', lg: 'none', xs: "none" } } },
  stepContent: (ele: any) => ({
    background: ele?.background,
    width: "100%",
    fontWeight: 700,
    fontSize: 20,
    color: "white",
    px: 2.5,
    py: 2,
    mt: 1,
    borderRadius: 3,
    boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  stepActiveContent: {
    boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
    borderRadius: 3,
    backgroundColor: "#fff",
    marginLeft: { xl: "auto", lg: '0', xs: '0' }
  }
}