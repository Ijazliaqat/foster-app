import React from 'react'
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { DeregisterInitialFormData } from '.';
import { useDeregisterInitialRequestForm } from './useInitialRequestForm';
import { FormProvider } from '@root/components/hook-form';

const InitialRequestForm = () => {
  const { methods, onSubmit, handleSubmit, handleBack } = useDeregisterInitialRequestForm();
  return (
    <Card sx={{ p: 2, minHeight: '80vh' }}>
      <Typography sx={styles.title} marginBottom={'20px'}>De-reg Initial Request</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {DeregisterInitialFormData.map((form: any, i: any) => {
            return (
              <Grid item xs={12}
                md={form?.gridLength}
                key={i}
                sx={{
                  display: form?.otherOptions?.name === 'methods' ? 'flex' : '',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                {form?.otherOptions?.name === 'methods' &&
                  <Typography sx={{ ...styles.title, color: '#343A40' }}>
                    {form?.otherOptions?.label}
                  </Typography>}
                <form.component size="small" {...form.otherOptions}>
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
              <LoadingButton type="submit" variant="contained">
                Submit
              </LoadingButton>
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

export default InitialRequestForm

const styles = {
  title: { color: '#0E918C', fontWeight: 600, fontSize: '16px' }
}