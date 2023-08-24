import React from "react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useApprovedDetailsForm } from "./useApprovedDetailsForm";

const ApprovedDetailsForm = ({ action, handleBack }: any) => {
  const disabled = action === "view" ? true : false;

  const { onSubmit, handleSubmit, ApprovedDetailsFormData, methods, router } =
    useApprovedDetailsForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {ApprovedDetailsFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              fullWidth
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item.componentProps.select
                ? item.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {" "}
                      {option.label}{" "}
                    </option>
                  ))
                : null}
              {item?.heading}
            </item.component>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button
            disabled={disabled}
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
          >
            Submit
          </Button>

          <Button
            type="button"
            variant="contained"
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
            onClick={handleBack}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default ApprovedDetailsForm;
