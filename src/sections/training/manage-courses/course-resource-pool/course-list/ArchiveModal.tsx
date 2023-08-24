import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import React from 'react'
import { useCourseArchive } from './useCourseArchive'
import { archiveCourseData } from '.'
import { FormProvider } from '@root/components/hook-form'
import { LoadingButton } from '@mui/lab'

const ArchiveModal = ({ open, onClose, handleArchive }: any) => {
  const { formDataArr } = archiveCourseData;
  const { methods, handleSubmit, onSubmit, isSubmitting } = useCourseArchive();
  return (
    <Dialog open={open} onClose={onClose} maxWidth={'lg'}>
      <DialogTitle sx={{ p: '20px' }}>Archive Course</DialogTitle>
      <DialogContent sx={{ px: '20px' }}>
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={4}>
            {
              formDataArr.map((form, i) => (
                <Grid key={i} item xs={12}>
                  <Typography>{form.title}</Typography>
                  <form.component
                    size='small'
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
              ))
            }
            <Grid item xs={12} sx={{ mt: '-20px' }}>
              <Box
                sx={{ display: "flex", gap: '1rem' }}>
                {/* <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  Archive
                </LoadingButton> */}
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleArchive}
                >Archive</Button>
                <Button
                  sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
                  type="button"
                  variant="contained"
                  onClick={onClose}
                >Cancel</Button>
              </Box>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default ArchiveModal