import React from 'react'
import { Dialog, DialogContent, Typography, Button, Grid } from '@mui/material'
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from '@mui/lab';
import { useCourtOrderModal } from './useCourtOrderModal';
import { formData } from '.';

const CourtOrderModal = ({ open, onClose, disabled }: any) => {

  const { methods, handleSubmit, onSubmit } = useCourtOrderModal();

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'md'} fullWidth>
      <DialogContent>
        <Typography sx={styles.title}>Contact related to court orders</Typography>
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

export default CourtOrderModal

const styles = {
  title: { color: '#0E918C', fontSize: '16px', fontWeight: 600, marginBottom: '25px' },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}