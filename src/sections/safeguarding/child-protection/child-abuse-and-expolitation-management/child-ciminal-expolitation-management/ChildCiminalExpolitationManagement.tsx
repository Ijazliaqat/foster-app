import { Box, Button, Grid, Typography } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { childCrimialExploitation } from '.';
import { LoadingButton } from '@mui/lab';
import { useChildCiminalExpolitationManagement } from './useChildCiminalExpolitationManagement';

const ChildCriminalExploitation = ({ handleNextBtn, disabled }: any) => {

  const {
    handleSubmit,
    methods,
    onSubmit,
    theme,
    router,
  } = useChildCiminalExpolitationManagement();

  return (
    <FormProvider
      methods={methods} onSubmit={() => {
        handleSubmit(onSubmit);
        handleNextBtn()
      }}
    >
      <Grid container spacing={4}>
        {childCrimialExploitation.map((form: any, i: number) => (
          <Grid item xs={12} md={form.gridLength} key={i}>
            <Typography
              sx={{
                fontWeight: 600, mt: '-20px', mb: '20px', color: theme.palette.primary.main
              }}
            >{form.head}
            </Typography>
            <Typography
              sx={{
                fontWeight: form.fontWeight, mb: 0.3, color:theme.palette.primary.main
              }}
            >{form.title}
            </Typography>
            <form.component
              size='small'
              disabled={disabled}
              {...form.otherOptions}
            >
              {form.otherOptions.select
                ? form.otherOptions.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
                : null}
            </form.component>
          </Grid>
        ))}
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
              onClick={() => router.push('/safeguarding/child-protection/child-abuse-and-expolitation-management')}
            >Back</Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}

export default ChildCriminalExploitation
