import { Box, Grid, Step, StepContent, StepLabel, Stepper, StepConnector } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDeregisterFosterDashboard } from "./useDeregisterFosterDashboard";
import { ArrowDown } from "@root/assets/svg/arrowDown";
import { deRegisterFosterStep } from ".";
import StepIconsButton from "./StepIconsButton";
import Image from "next/image";

const DeregisterFosterDashboard = () => {
  const { activeStep, handleStep } = useDeregisterFosterDashboard();
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear orientation="vertical" activeStep={activeStep} sx={{ "& .MuiStepContent-root": { marginLeft: "36px" } }} connector={<StepConnector sx={{ marginLeft: "36px" }} />}>
        {deRegisterFosterStep.map((ele: any, index) => (
          <Step key={ele.id} sx={{ display: "flex" }}>
            <Grid container justifyContent={"space-between"} direction={"row"}>
              <Grid item container xs={0.7}>
                <StepLabel
                  // onClick={handleStep(index)
                  StepIconComponent={() => StepIconsButton(index, ele?.color)}
                ></StepLabel>
              </Grid>

              <Grid
                container
                xs={11}
                item
                onClick={handleStep(index)}
                sx={{
                  background: ele?.color,
                  width: "100%",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "white",
                  p: 2,
                  mt: 1,
                  borderRadius: 3,
                  boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {ele.label}
                { activeStep !== index &&  <Image src={ele?.icon} alt="" /> }
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

              <StepContent>
                <Grid item container justifyContent={"end"} xs={12}>
                  <Grid
                    container
                    justifyContent={"end"}
                    item
                    sm={11.25}
                    xs={12}
                    sx={{
                      boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                    }}
                  >
                    {activeStep === index && ele.component}
                  </Grid>

                </Grid>
              </StepContent>
            </Grid>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default DeregisterFosterDashboard;
