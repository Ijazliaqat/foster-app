import {
  Card,
  Grid,
  Button,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@mui/material";

import {
  RHFSwitch,
  FormProvider,
  RHFRadioGroup,
  RHFTextField,
} from "@root/components/hook-form";
import React from "react";
import { declarationParagraph, viewDeclarationData } from ".";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useViewDeclaration } from "./useViewDeclaration";

export const ViewDeclaration = () => {
  const {
    theme,
    expanded,
    BorderLinearProgress,
    handleSubmit,
    onSubmit,
    methods,
    handleChange,
  }: any = useViewDeclaration();
  return (
    <>
      <Card>
        <Grid container p={1}>
          <Grid p={2} container direction={"column"} item md={10} xs={12}>
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: theme?.palette?.primary?.main,
              }}
            >
              Susan Smith
            </span>
            <span style={{ margin: "10px 0px 10px 0px" }}>
              Here you can see the progress of Madiha Iffat ‘s application.
            </span>
            <BorderLinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid
            item
            md={10}
            xs={12}
            sx={{ borderBottom: "1px solid", width: "100%" }}
          ></Grid>
          <Grid container alignItems={"center"} px={2} py={1} my={1}>
            <Grid item md={3} xs={11}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#F06533", marginY: { md: 0, xs: 1 } }}
              >
                Activation & Settings
              </Button>
            </Grid>
            <Grid item md={3} xs={11}>
              <span style={{ fontWeight: 600 }}>User Status</span>:{" "}
              <span>Active</span>
            </Grid>
            <Grid item md={3} xs={11}>
              <span style={{ fontWeight: 600 }}>User Type</span>:{" "}
              <span>Prospective Foster Carer</span>
            </Grid>
          </Grid>
          <Grid
            item
            md={10}
            xs={12}
            sx={{ borderBottom: "1px solid", width: "100%" }}
          ></Grid>
          <Grid container direction={"column"} item md={9.5} xs={12} p={2}>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
                color: theme?.palette?.primary?.main,
              }}
            >
              DECLARATION
            </span>
            <span style={{ margin: "10px 0px 15px 0px" }}>
              The following declaration ststements are asked to candidates.
            </span>
            <p style={{ marginBottom: 5 }}>{declarationParagraph}</p>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <RHFSwitch
                name="agreeToAboveDeclaration"
                label="I agree to the above Declaration"
              />
              {viewDeclarationData?.map((ele: any) => {
                return (
                  <Accordion
                    sx={{ border: "1px solid #898989", my: 2 }}
                    key={ele?.id}
                    onChange={handleChange(ele?.id)}
                    expanded={expanded === ele?.id}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === ele?.id ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <span style={{ fontWeight: 500, fontSize: 18 }}>
                        {ele?.accordianName}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      {ele?.heading && <span>{ele?.heading}</span>} <br />{" "}
                      <br />
                      {ele?.heading2 && <span>{ele?.heading2}</span>}
                      {ele?.component === RHFRadioGroupWithLabel && (
                        <Grid container>
                          <RHFRadioGroup
                            name={ele?.otherOptions?.name}
                            options={ele?.otherOptions?.options}
                          />
                        </Grid>
                      )}
                      {ele?.textfield && (
                        <Grid container item md={6} xs={12}>
                          <RHFTextField
                            minRows={ele?.textfield?.componentProps?.minRows}
                            name={ele?.textfield?.componentProps?.name}
                            label={ele?.textfield?.componentProps?.label}
                            fullWidth={
                              ele?.textfield?.componentProps?.fullWidth
                            }
                            multiline
                          />
                        </Grid>
                      )}
                      {ele?.component === RHFSwitch && (
                        <Grid container>
                          <RHFSwitch
                            name={ele?.otherOptions?.name}
                            label={ele?.otherOptions?.label}
                          />
                        </Grid>
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
              <Button
                variant="contained"
                type="submit"
                sx={{ my: 1, width: { sm: "auto", xs: "100%" } }}
              >
                Submit Declaration
              </Button>
              <br />
              <Button
                sx={{ backgroundColor: "#F06533", my: 1 }}
                variant="contained"
              >
                Not Audited: Click to mark as audited{" "}
              </Button>
            </FormProvider>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
