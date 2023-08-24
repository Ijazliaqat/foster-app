import { Box, Button, Dialog, DialogContent, Grid, Tooltip, Typography, useTheme } from '@mui/material'
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { setupFormData } from '.'
import { useSetupForm } from './useSetupForm'
import { LoadingButton } from '@mui/lab';
import InfoIcon from '@mui/icons-material/Info';

const SetupForm = ({ open, onClose, disabled }: any) => {

  const { methods, onSubmit, handleSubmit } = useSetupForm();
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={'lg'}
    >
      <DialogContent>
        <Typography sx={{ mb: 3, fontWeight: 600, color: theme.palette.grey[600] }}>Add Panel Set Up</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {setupFormData.map((form: any, i: number) => (
              <Grid item xs={12} md={form.gridLength} key={i}>
                {form.otherOptions.label !== 'Panel Member' ? <form.component
                  size='small'
                  disabled={disabled}
                  {...form.otherOptions}
                >
                  {form.otherOptions.select &&
                    form.otherOptions.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </form.component> :
                  <>
                    <form.component
                      size='small'
                      disabled={disabled}
                      {...form.otherOptions}
                    />
                    <Tooltip
                      title={'If the panel member name is not in the list, Create a new member from User Management > System admin.'}
                      placement='right'
                      arrow
                      sx={{ mt: 1, position: 'absolute' }}
                    >
                      <InfoIcon />
                    </Tooltip>
                  </>}
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
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
                onClick={onClose}
              >Back</Button>
            </Box>
          </Grid>
        </FormProvider>
      </DialogContent>

    </Dialog>
  )
}

export default SetupForm