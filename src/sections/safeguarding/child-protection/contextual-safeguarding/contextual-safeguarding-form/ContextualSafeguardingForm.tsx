import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useContextualSafeguardingForm } from "./useContextualSafeguardingForm";

const ContextualSafeguardingForm = ({ disabled }: any) => {
  const { methods, ContextualFormData, handleSubmit, onSubmit } =
    useContextualSafeguardingForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {ContextualFormData?.map((item: any) => (
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
              Submit
            </Button>
          )}

          <Link
            href={"/safeguarding/child-protection/contextual-safeguarding"}
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
  );
};

export default ContextualSafeguardingForm;
