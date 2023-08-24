import { Box, Button, Grid, Typography } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { childDetailForm } from '.';
import { useChildDetails } from './useChildDetails';

const ChildDetails = ({ disabled, handleNextBtn, handlePrevoiusBtn }: any) => {
  const { methods, theme, handleSubmit, onSubmit } = useChildDetails();

  return (
    <FormProvider
      methods={methods} onSubmit={() => {
        handleSubmit(onSubmit);
        handleNextBtn();
      }}
    >
      <Grid container spacing={4} sx={{ mt: 0 }}>
        {childDetailForm.details.map((data, i) => (
          <Grid item md={6} xs={12} key={i} sx={{ pt: '15px !important' }}>
            <Box display={'flex'}>
              <Typography sx={{ fontWeight: 500, mr: 1 }}>{data.title}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{data.value}</Typography>
            </Box>
          </Grid>
        ))}
        <Box width='100%' />
        {
          childDetailForm.fields.map((form, i) => (
            <Grid item xs={12} md={form.gridLength} key={i}>
              <Typography
                sx={{
                  fontWeight: 600, mb: 0.3, color: theme.palette.primary.main
                }}
              >{form.title}
              </Typography>
              {form.otherOptions && <form.component disabled={disabled} size='small' {...form.otherOptions}>
                {form.otherOptions.select
                  ? form.otherOptions.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                  : null}
              </form.component>}
            </Grid>
          ))
        }
        <Grid item xs={12}>
          <Box
            sx={{ display: "flex", gap: '1rem' }}>
            <LoadingButton
              type="submit"
              variant="contained"
            >
              Next
            </LoadingButton>
            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
              type="button"
              variant="contained"
              onClick={handlePrevoiusBtn}
            >Back</Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}

export default ChildDetails