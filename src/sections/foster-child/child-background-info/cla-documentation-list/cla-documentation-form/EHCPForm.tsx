import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { EHCPFormData } from "..";
import { useEhcpForm } from "./useEhcpForm";

export default function EHCPForm(props: any) {
  const { methods, handleSubmit, onSubmit, disabled, router, isSubmitting } =
    useEhcpForm(props);
  const { fosterChildId } = router.query;

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {EHCPFormData?.map((item: any, index: any) => (
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
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            variant="contained"
            onClick={() =>
              router.push({
                pathname:
                  "/foster-child/child-background-info/cla-documentation",
                query: { fosterChildId: fosterChildId },
              })
            }
          >
            Back
          </LoadingButton>
        </Box>
      </FormProvider>
    </Paper>
  );
}
