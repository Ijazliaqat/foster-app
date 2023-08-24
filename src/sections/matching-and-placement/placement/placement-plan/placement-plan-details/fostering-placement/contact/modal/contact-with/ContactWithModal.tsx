import React from 'react'
import { Dialog, DialogContent, Typography, Button, Grid } from '@mui/material'
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from '@mui/lab';
import { useContactWithModal } from './useContactWithModal';
import { formData } from '.';

const ContactWithModal = ({ open, onClose, disabled }: any) => {

  const { methods, handleSubmit, onSubmit } = useContactWithModal();

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'md'} fullWidth>
      <DialogContent>
        <Typography sx={styles.title}>Details of any person whom the child/young person should not have contact with:</Typography>
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
export default ContactWithModal

const styles = {
  title: { color: '#0E918C', fontSize: '16px', fontWeight: 600, marginBottom: '25px' },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}