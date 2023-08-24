import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import React from 'react'
import { compareConsiderationList } from '.';
import Image from 'next/image';
import { useAddConsiderationModal } from './useAddConsiderationModal';

const AddConsiderationModal = (props: any) => {
  const { isAddConsiderationModalOpen, setIsAddConsiderationModalOpen } = props;
  const { selectedList, handleSelectedList, handleSubmit } = useAddConsiderationModal(setIsAddConsiderationModalOpen)
  return (
    <Dialog open={isAddConsiderationModalOpen} onClose={() => setIsAddConsiderationModalOpen(false)} maxWidth="lg">
      <DialogTitle sx={styles.dialogTitle}>Select who’s consideration list do you want to add</DialogTitle>
      <DialogContent sx={{ mt: 4.2 }}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {compareConsiderationList.map((item: any, index: any) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={item.id} >
              <Box sx={styles.dialogContent(selectedList === index + 1)} onClick={() => handleSelectedList(item)}>
                <Image src={item.img} alt={item.title} />
                <Typography component="h2" sx={styles.title}>{item.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={styles.buttonWrapper}>
          <Button type="submit" sx={styles.submitBtn} disabled={!selectedList} onClick={handleSubmit}>Submit</Button>
          <Button type="button" sx={styles.cancelBtn} onClick={() => setIsAddConsiderationModalOpen(false)}>Cancel</Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default AddConsiderationModal

const styles: any = {
  dialogTitle: { fontSize: "24px !important", fontWeight: 600, color: "#212529", },
  dialogContent: (selected: any) => ({ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", background: selected && '#C4C4C4', py: 3, border: selected && '1px solid #000', borderRadius: selected && '1px' }),
  title: { fontSize: "14px !important", fontWeight: 600, color: "#212529", pt: 0.5 },
  buttonWrapper: { display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", mt: 5 },
  submitBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2, py: 0.8, fontSize: "16px", fontWeight: 600, },
  cancelBtn: { backgroundColor: "#F6830F", color: "#fff", "&:hover": { backgroundColor: "#F6830F" }, px: 2, py: 0.8, fontSize: "16px", fontWeight: 600, },
}