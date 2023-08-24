import { Box, Button, Grid } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { childNotificationForm } from '.';
import { useChildNotification } from './useChildNotification';

const ChildNotification = ({ disabled, handleNextBtn, handlePrevoiusBtn }: any) => {
  const { methods, handleSubmit, onSubmit } = useChildNotification();

  return (
    <FormProvider
      methods={methods} onSubmit={() => {
        handleSubmit(onSubmit);
        handleNextBtn();
      }}
    >
      <Grid container spacing={1}>
        {
          childNotificationForm.map((form, i) => (
            <Grid item xs={12} md={form.gridLength} key={i}>
              <form.component disabled={disabled} {...form.otherOptions} />
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
              Submit
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

export default ChildNotification