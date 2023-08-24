import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormProvider } from "@root/components/hook-form";
import {
  PEPFormData,
  StrategiesAndEvidence,
  TargetsAndObjectivesData,
} from "..";
import { usePepFom } from "./usePepFom";

export default function PEPForm(props: any) {
  // Pep Form Custom Hook
  const { methods, handleSubmit, onSubmit, disabled, router, isSubmitting } =
    usePepFom(props);
    const {fosterChildId} = router.query;

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {PEPFormData?.map((item: any, index) => (
            <Grid item xs={12} md={item?.md} key={index}>
              <item.component
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))
                  : null}
                {item?.heading}
              </item.component>
            </Grid>
          ))}
        </Grid>

        
          <Box sx={{ display: "flex", mb: "1rem" }}>
          {!disabled && (
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
            )}
            <LoadingButton
              // onClick={() => {
              //   router.push(
              //     "/foster-child/child-background-info/cla-documentation"
              //   );
              // }}
              onClick={() => router.push({
                pathname:  "/foster-child/child-background-info/cla-documentation",
                query: {fosterChildId: fosterChildId}
              })}
              type="button"
              sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
              variant="contained"
            >
              Back
            </LoadingButton>
          </Box>
        
      </FormProvider>
    </Paper>
  );
}

export function TargetsAndObjectives() {
  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={6}>
        {TargetsAndObjectivesData?.map((item: any, index) => (
          <Grid item xs={12} md={item?.md} key={index}>
            <item.component {...item.componentProps} size={"small"}>
              {item?.heading}
              <Box
                sx={{ display: "flex", alignItems: "top", flexWrap: "nowrap" }}>
                <span> {item?.paraTitle}</span>
                <Box sx={{ mb: 2 }}>{item?.para}</Box>
              </Box>
            </item.component>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        {StrategiesAndEvidence?.map((item: any, index) => (
          <Grid item xs={12} md={item?.md} key={index}>
            <item.component {...item.componentProps} size={"small"}>
              {item?.heading}
              <li>{item?.para}</li>
            </item.component>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
