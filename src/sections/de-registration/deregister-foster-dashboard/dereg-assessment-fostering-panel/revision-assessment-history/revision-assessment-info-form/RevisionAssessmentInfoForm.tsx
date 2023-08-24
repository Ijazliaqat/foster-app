import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import { useRevisionAssessmentInfoForm } from './useRevisionAssessmentInfoForm';

const RevisionAssessmentInfoForm = ({disabled}: any) => {
  const { methods, formDataFeild, handleSubmit, onSubmit } =
  useRevisionAssessmentInfoForm();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <Grid container columnSpacing={4}>
      {formDataFeild?.map((item: any) => (
        <Grid item xs={12} md={item?.md} key={item?.id}>
          <item.component
            {...item.componentProps}
            disabled={disabled}
            size={"small"}
          >
            {item?.heading}
          </item.component>
        </Grid>
      ))}

      <Grid item xs={12}>
        {!disabled && (
          <Button
            disabled={disabled}
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
          >
            Save & Next
          </Button>
        )}

        <Link
          href={"/de-registration/deregister-foster-carer/proposal-to-revise"}
          style={{ textDecoration: "none" }}
        >
          <Button
            type="button"
            variant="contained"
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
          >
            Back
          </Button>
        </Link>
      </Grid>
    </Grid>
  </FormProvider>
  )
}

export default RevisionAssessmentInfoForm