import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LADetailsFormFormData } from ".";
import { useLADetailsForm } from "./useLADetailsForm";

const LADetailsForm = ({ disabled, handlePreviousBtn }: any) => {
  const { onSubmit, methods, handleSubmit } = useLADetailsForm();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {LADetailsFormFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <Typography
              sx={{
                marginBottom: "5px",
                fontSize: "16px !important",
                fontWeight: "600",
              }}
              variant="h6"
              gutterBottom
            >
              {item.title}
            </Typography>
            <item.component
              fullWidth
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item.componentProps.select
                ? item.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : null}
              {item?.heading}
            </item.component>
          </Grid>
        ))}

        <Grid item xs={12}>
          {!disabled && (
            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Submit
            </Button>
          )}

          <Link
            href="/referral/foster-child-request-form/add-foster-child-request-form"
            style={{ textDecoration: "none" }}
          >
            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": { backgroundColor: "#F6830F" },
              }}
              onClick={() => {
                handlePreviousBtn();
              }}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default LADetailsForm;
