import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { useMeetingRecordForm } from './useMeetingRecordForm';
import { formData } from '.';
import RHFUploadFile from '@root/components/hook-form/RHFUploadFile';

const MeetingRecordForm = ({ id }: any) => {
  const { methods, onSubmit, handleSubmit, handleBack } = useMeetingRecordForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider
        methods={methods} onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={4}>
          {formData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12} sx={form.sx}>
              {form.title && <Typography fontWeight={600} fontSize={'16px'} color={'#343A40'}>{form.title}</Typography>}
              {form.component && <form.component size='small' {...form.otherOptions}>
               
              </form.component>}
              {form.otherOptions.name === 'meetingMinutes' && <RHFUploadFile {...form.otherOptions} {...methods} />}
            </Grid>
          ))}

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
                onClick={handleBack}
              >Back</Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card >
  )
}

export default MeetingRecordForm;