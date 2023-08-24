import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FormSchema,
  defaultValues,
  carerSectionAlphaData,
} from "./CarerSectionData";

export default function CarerSectionA(props: any) {
  const theme: any = useTheme();
  const { onSubmit } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{ mb: 4, color: theme.palette.grey[600] }}
      >
        Supervising Social Worker: Not Assigned
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {carerSectionAlphaData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                {form.id !== 7.5 && (
                  <form.component size="small" {...form.otherOptions} disabled>
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
              </Grid>
            );
          })}
        </Grid>
      </FormProvider>
    </>
  );
}
