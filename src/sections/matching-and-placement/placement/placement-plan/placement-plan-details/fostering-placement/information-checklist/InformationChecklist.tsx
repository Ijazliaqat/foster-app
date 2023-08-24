import React from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from '@mui/lab';
import { formData } from '.';
import { useInformationChecklist } from './useInformationChecklist';

const InformationChecklist = () => {

  const { methods, handleSubmit, onSubmit, disabled, handleBack } = useInformationChecklist();

  return (
    <Card sx={styles.card}>
      <Typography sx={styles.title}>Information checklist for foster carer</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {
            formData.map((item, i) => (
              <Grid item key={i} md={item.gridLength} xs={12}>
                <item.component
                  size={"small"}
                  disabled={disabled}
                  {...item.otherOptions}
                >
                </item.component>
              </Grid>
            ))
          }
          <Grid item xs={12} display={"flex"} gap={"10px"} sx={{ mt: 2 }}>
            {!disabled && (
              <LoadingButton type="submit" variant="contained">
                Submit
              </LoadingButton>
            )}
            <Button
              sx={styles.btnStyle}
              type="button"
              variant="contained"
              onClick={handleBack}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  )
}

export default InformationChecklist

const styles = {
  card: { p: 2, boxShadow: '0px 0px 7px 3px #0E918C33' },
  title: { color: '#0E918C', fontSize: '16px', fontWeight: 600, margin: '20px 0px' },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}