import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { useFosterChildComments } from './useFosterChildComments';
import { FRD1FormData } from '.';

const FosterChildComments = ({ action, id }: any) => {
  const disabled = action === 'view' ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } = useFosterChildComments();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={'center'}>
        <Typography sx={(theme)=>style.headerTitle(theme)}>
          FR-D1: FOSTERED CHILD’S COMMENT
        </Typography>
        <Typography sx={{ fontWeight: 500, mb: '30px', fontSize: '16px', color: '#898989' }}>
          It is the responsibility of the supervising social worker to agree with the child’s social
          worker who is best placed to assist the fostered child to complete this report if they need
          support. Wherever possible, it should be completed by the child in their own words, and
          with the support of the person they are most comfortable with (but not the foster carer).
          Each fostered child should complete a separate form.
        </Typography>
      </Box>
      <FormProvider
        methods={methods} onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={4}>
          {FRD1FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              <Typography sx={(theme)=>style.title(theme)}>{form.title}</Typography>
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
          ))}

          <Grid item xs={12}>
            <Box
              sx={{ display: "flex", gap: '1rem' }}>
              {!disabled && <LoadingButton
                type="submit"
                variant="contained"
              >
                Submit
              </LoadingButton>}
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
    </Card>
  )
}

export default FosterChildComments
const style = {
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
  headerTitle: (theme: any) => ({
    fontWeight: 700,
    mb: "20px",
    fontSize: "17px",
    color: theme.palette.primary.main,
  }),
};