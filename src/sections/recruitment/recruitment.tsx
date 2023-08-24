import {
  Box,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Button,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { steps } from ".";
import { useRecruitment } from "./useRecruitment";
import { ArrowDown } from "@root/assets/svg/arrowDown";
import StepIconsButton from "./StepIconsButton";
import { ManageLoginDropDown } from "./manage-login-dropdown/ManageLoginDropDown";

export default function Recruitment() {
  const { activeStep, handleStep } = useRecruitment();
  const theme: any = useTheme();
  return (
    <Box sx={{ width: "100%" }}>
      <Grid item xs={12} container justifyContent={{ sm: "end", xs: "center" }}>
        <Button
          sx={{
            mx: { sm: 2, xs: 0 },
            my: { sm: 0, xs: 2 },
          }}
          variant="contained"
          startIcon={<AccountCircleIcon />}
        >
          Carer Details
        </Button>
        <ManageLoginDropDown />
      </Grid>

      <Stepper nonLinear orientation="vertical" activeStep={activeStep}>
        {steps.map((ele, index) => (
          <Step
            key={ele.id}
            sx={{ display: "flex", my: 2.5 }}
          >
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
                  p: 2.5,
                  mt: 1,
                  borderRadius: 3,
                  boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {ele.label}
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
                    sm={11.2}
                    xs={12}
                    sx={{
                      boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                    }}
                  >
                    {activeStep === index && ele.component}
                  </Grid>
                  <Grid
                    item
                    md={11.2}
                    xs={12}
                    py={4}
                    sx={{
                      boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                    }}
                    bgcolor={
                      theme.palette.mode === "light"
                        ? "white"
                        : theme.palette.grey[800]
                    }
                  ></Grid>
                </Grid>
              </StepContent>
            </Grid>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
