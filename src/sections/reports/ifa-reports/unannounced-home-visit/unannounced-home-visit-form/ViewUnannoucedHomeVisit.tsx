import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { UnannouncedHomeVisitFromDate } from ".";
import { useViewUnannoucedHomeVisit } from "./useViewUnannoucedHomeVisit";
import { LoadingButton } from "@mui/lab";

const ViewUnannoucedHomeVisit = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = useViewUnannoucedHomeVisit();
  return (
    <FormProvider methods={methods}>
      <Grid container columnSpacing={4}>
        {UnannouncedHomeVisitFromDate?.map((form: any, i: any) => (
          <Grid item xs={12} md={form?.gridLength} key={i}>
            <Typography sx={(theme) => styles.title(theme, disabled)}>
              {form.title}
            </Typography>
            {form.component && (
              <form.component
                fullWidth
                disabled={disabled}
                size="small"
                {...form.componentProps}
              >
                {form?.heading}
                {form.componentProps.select
                  ? form.options.map((option: any) => (
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
            <LoadingButton type="submit" variant="contained">
              Submit
            </LoadingButton>

            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
            >
              back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default ViewUnannoucedHomeVisit;

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
};
