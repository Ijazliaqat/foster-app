import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useAddSwotForm } from "./useAddSwotForm";
import { LoadingButton } from "@mui/lab";

const AddSwotForm = () => {
  const { methods, handleSubmit, router, onSubmit } = useAddSwotForm();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Typography sx={styles.mainHeading}>SWOT Analysis Info</Typography>
          </Grid>
          {formFields.map((field, i) => (
            <Grid item md={field.gridLength} xs={12} key={i}>
              <field.component
                size={"small"}
                fullWidth
                {...field.otherOptions}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} mt={3}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
            >
              Submit
            </LoadingButton>
            <Button
              type="button"
              variant="contained"
              onClick={() => router.push("/marketing/market-gap-analysis")}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default AddSwotForm;

const styles = {
  mainHeading: {
    color: (theme: any) => theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: "600",
  },
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
