import React from 'react'
import { CheckMedicalFormData } from '.';
import { Grid } from '@mui/material';

export const CheckMedicals = () => {
  return (
    <>
      {/* <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}> */}
      <Grid container spacing={3}>
        {CheckMedicalFormData?.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form?.id}>
              <>
                <Grid>
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    //   disabled={disabled}
                  >
                    {form.otherOptions
                      ? form.options?.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                      {form?.heading}
                  </form.component>
                </Grid>
              </>
            </Grid>
          );
        })}
      </Grid>
      {/* </FormProvider> */}
    </>
  )
}
