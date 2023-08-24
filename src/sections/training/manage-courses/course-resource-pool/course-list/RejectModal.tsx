import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@mui/material'
import React from 'react'

const RejectModal = ({ open, onClose, handleChange, handleSubmit }: any) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={'sm'} fullWidth>
      <DialogTitle sx={{ p: '20px' }}>Rejection Reason</DialogTitle>
      <DialogContent sx={{ px: '20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField name='rejectionReason'
              multiline
              fullWidth
              minRows={3}
              onChange={handleChange}
              placeholder='Enter Reason'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: '20px' }}>
          <Box
            sx={{ display: "flex", gap: '1rem' }}>
            <Button
              type="button"
              variant="contained"
              onClick={handleSubmit}
            >Submit</Button>
            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
              type="button"
              variant="contained"
              onClick={onClose}
            >Cancel</Button>
          </Box>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default RejectModal