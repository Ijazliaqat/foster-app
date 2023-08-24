import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Button, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { CarerFeedbackFormData } from ".";
import { useViewCarerFeedback } from "./useViewCarerFeedback";

const ViewCarerFeedBackForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = useViewCarerFeedback();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <FormProvider methods={methods}>
        <Grid container columnSpacing={4}>
          {CarerFeedbackFormData?.map((form: any, i: any) => (
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
            <Link
              href={"/reports/ifa-reports/carer-feedback"}
              style={{ textDecoration: "none" }}
            >
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
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default ViewCarerFeedBackForm;

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
};
