import React from "react";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import Link from "next/link";
import { useRevisionInfoFrom } from "./useRevisionInfoFrom";

const RevisionInfo = ({ disabled }: any) => {
  const { methods, formDataFeildData, handleSubmit, onSubmit } =
    useRevisionInfoFrom();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {formDataFeildData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item.heading}
              {item.componentProps.select
                ? item.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : null}
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
              Submit
            </Button>
          )}

          <Link href={"/de-registration/deregister-foster-carer/proposal-to-revise"} style={{ textDecoration: "none" }}>
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
  );
};

export default RevisionInfo;
