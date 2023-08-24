import React from 'react';
import { FormProvider } from "@root/components/hook-form";
import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { formData } from '.';
import { useActionSheet } from './useActionSheet';

const ActionSheetModal = ({ open, onClose, disabled }: any) => {

  const { methods, handleSubmit, onSubmit } = useActionSheet();

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'md'} fullWidth>
      <DialogContent>
        <Typography sx={styles.title}>Action sheet – transfer actions identified through the plan into the Care Plan</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {formData.map((item, i) => (
              <Grid key={i} item md={item.gridLength} xs={12}>
                <item.component
                  disabled={disabled}
                  size={'small'}
                  fullWidth
                  {...item.otherOptions}
                />
              </Grid>
            ))}
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
                onClick={onClose}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default ActionSheetModal

const styles = {
  title: {
    color: '#0E918C',
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '25px'
  },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}