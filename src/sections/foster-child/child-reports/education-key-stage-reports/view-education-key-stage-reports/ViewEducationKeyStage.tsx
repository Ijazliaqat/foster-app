import { Grid } from '@mui/material';
import { FormProvider } from '@root/components/hook-form';
import React from 'react'
import { viewEducationKeyStage } from '.';
import useViewEducationKeyStage from './useViewEducationKeyStage';

const ViewEducationKeyStage = () => {
    const { methods, handleSubmit, onSubmit, router, defaultValues } = useViewEducationKeyStage()
  return (
    <>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {viewEducationKeyStage.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <>
                  <Grid>
                    <form.component
                      disabled={true}
                      size="small"
                      {...form.otherOptions}
                    >
                      {form.otherOptions
                        ? form.options?.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  </Grid>
                </>
              </Grid>
            );
          })}
        </Grid>
      </FormProvider>
    </>
    
  )
}

export default ViewEducationKeyStage