import React from "react";
import { useMarketingPlanMeetingForm } from "./useMarketingPlanMeetingForm";
import { Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { formData } from ".";
import { LoadingButton } from "@mui/lab";

const MarketingPlanMeetingForm = ({ id }: any) => {
  const { methods, handleSubmit, onSubmit, handleBack } =
    useMarketingPlanMeetingForm();

  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={styles.title}>Marketing Plan Meeting</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formData.map((item, i) => (
            <Grid item md={item.gridLength} xs={12} key={i}>
              <item.component size={"small"} fullWidth {...item.otherOptions}>
                {item.otherOptions.select
                  ? item.otherOptions.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </item.component>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          marginTop={"20px"}
        >
          <LoadingButton type="submit" variant="contained">
            Submit
          </LoadingButton>
          <Button sx={styles.btn} variant="contained" onClick={handleBack}>
            Back
          </Button>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default MarketingPlanMeetingForm;

const styles = {
  title: {
    fontWeight: 600,
    fontSize: "16px",
    color: "#0E918C",
    mb: "15px",
  },
  btn: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
};
