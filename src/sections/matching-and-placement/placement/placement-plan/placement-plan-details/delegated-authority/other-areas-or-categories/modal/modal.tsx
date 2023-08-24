import React from 'react'
import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material'
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from '@mui/lab';
import { formData } from '.';
import { useModal } from './useModal';

const CategoriesModal = ({ open, onClose, disabled }: any) => {

  const { methods, handleSubmit, onSubmit } = useModal();

  return (
    <Dialog open={open} onClose={onClose} maxWidth={'lg'} fullWidth>
      <DialogContent>
        <Typography sx={styles.title}>Action sheet – transfer actions identified through the plan into the Care Plan</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {
              formData.map((item, i) => (
                <Grid item key={i} md={item.gridLength} xs={12}>
                  <item.component
                    size={"small"}
                    fullWidth
                    disabled={disabled}
                    {...item.otherOptions}
                  />
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

export default CategoriesModal

const styles = {
  title: {
    color: '#0E918C',
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '20px'
  },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}