import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { FormProvider } from '@root/components/hook-form';
import React from 'react'
import { SWAssessmentFormData } from '.';
import { useDeregisterSWAssessmentForm } from './useDeregisterSWAssessmentForm';

const DeregisterSWAssessmentForm = ({ disabled }: any) => {
  const { methods, handleSubmit, onSubmit, handleBack } = useDeregisterSWAssessmentForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {SWAssessmentFormData.map((form: any, i: any) => {
            return (
              <Grid item xs={12}
                md={form?.gridLength}
                key={i}
                sx={{
                  display: form?.otherOptions?.name === 'status' ? 'flex' : '',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                {form?.otherOptions?.name === 'status' &&
                  <Typography sx={{ ...styles.title, color: '#343A40' }}>
                    {form?.otherOptions?.label}
                  </Typography>}
                <form.component size="small" disabled={disabled} {...form.otherOptions}>
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                    : null}
                </form.component>
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              {!disabled && <LoadingButton type="submit" variant="contained">
                Submit
              </LoadingButton>}
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                type="button"
                variant="contained"
                onClick={handleBack}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  )
}

export default DeregisterSWAssessmentForm

const styles = {
  title: { color: '#0E918C', fontWeight: 600, fontSize: '16px' }
}