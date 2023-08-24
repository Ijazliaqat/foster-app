
import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { SafeguardingAssessmentAddForm } from ".";
import { useSafeguardingAssessmentForm } from "./useSafeguardingAssessmentForm";

export default function SafeguardingAssessmentForm({ disabled, }: any) {
  const { methods, handleSubmit, onSubmit, theme } = useSafeguardingAssessmentForm()

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {SafeguardingAssessmentAddForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <Typography sx={{ fontSize: "16px !important", fontWeight: "400 !important",color:theme.palette.primary.main }} variant="h6" gutterBottom>{item.title}</Typography>


            <item.component fullWidth
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>

            {item?.subComponent &&
              <>
                {item?.subComponent?.map((comp: any, index: any) => (
                  <Grid key={index} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                    borderBottom: index === item.subComponent.length - 1 ? "none" : "2px solid rgba(0, 0, 0, 0.2)",
                  }}>
                    <Grid item md={10}>
                      <Typography sx={styles.subComponent}>{comp?.subComponentTitle}</Typography>
                    </Grid>

                    <Grid item md={2} sx={{ textAlign: "end" }}>
                      <Typography sx={styles.subComponent}>{comp?.subComponentStatus}</Typography>
                    </Grid>

                  </Grid>
                ))}
              </>

            }

          </Grid>
        ))}

        <Grid item xs={12}>
          {!disabled && (
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
            // loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          )}
          <Link
            href={"/safeguarding/safeguarding-tools/safeguarding-assessment-tool"}
            style={{ textDecoration: "none" }}
          >
            <Button type="button" variant="contained">
              Back
            </Button>
          </Link>
        </Grid>

      </Grid>
    </FormProvider>
  );
}

// Styles
const styles = {
  subComponent: {
    marginTop: "20px", marginBottom: "20px", fontSize: "16px !important", fontWeight: "600 !important", opacity: "0.6"
  },
}
