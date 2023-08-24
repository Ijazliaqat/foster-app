import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useAddChildArrangement } from "./useAddChildArrangement";
import { FRD1FormData } from ".";

const AddChildArrangement = ({ action, id }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } =
    useAddChildArrangement();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={"center"}>
      <Typography sx={(theme)=>style.headerTitle(theme)}>
          FR-F4: PARENT IN PARENT AND CHILD ARRANGEMENT
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            mb: "30px",
            fontSize: "16px",
            color: "#898989",
          }}
        >
          Please note that this report will be shared with the foster carer(s).
          If you have relevent information that you think should not be shared
          with the foster carer(s) then please discuss this with the supervising
          social worker.
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FRD1FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
                 <Typography sx={(theme)=>style.title(theme)}>
                {form.title}
              </Typography>
              {form.otherOptions && (
                <form.component
                  disabled={disabled}
                  size="small"
                  {...form.otherOptions}
                >
                  {form.otherOptions.select
                    ? form.otherOptions.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {!disabled && (
                <LoadingButton type="submit" variant="contained">
                  Submit
                </LoadingButton>
              )}
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": { backgroundColor: "#F6830F" },
                }}
                type="button"
                variant="contained"
                onClick={handleBack}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default AddChildArrangement;
const style = {
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
  headerTitle: (theme: any) => ({
    fontWeight: 700,
    mb: "20px",
    fontSize: "17px",
    color: theme.palette.primary.main,
  }),
};