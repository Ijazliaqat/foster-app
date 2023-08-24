import React from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useCategoryModal } from "./useCategoryModal";
import { FormProvider } from '@root/components/hook-form';
import { complianceMangementModalData } from ".";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const CategoryModal = ({ open, onClose, categoryName, requireIcon }: any) => {
  const { methods, handleSubmit, onSubmit, pdfUpload, pdfArray, handleUploadPdf } = useCategoryModal();
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <Typography sx={styles.title}>Add New {categoryName ? 'Sub' : ''} Category</Typography>
      <DialogContent>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {complianceMangementModalData.map((data, i) => (
            <>
              {data.componentProps.name !== 'subCategoryName' ?
                <data.component size={'small'} value={categoryName} disabled={!!categoryName} fullWidth {...data.componentProps} />
                :
                <Box display={'flex'} gap={'10px'} margin={'10px 0px'}>
                  <data.component size={'small'} fullWidth {...data.componentProps} />
                  <Button
                    sx={{ ...styles.btnStyle, ...styles.btnCircle }}
                    variant="contained"
                    component="label"
                  >
                    <input type="file" hidden onChange={handleUploadPdf} />
                    <AddIcon sx={{ color: '#fff' }} />
                  </Button>
                </Box>
              }
            </>
          ))}
          {pdfUpload && <Box sx={styles.pdfBox}>
            {pdfArray.map((name, i) => <Box sx={styles.pdfTitle} key={i}>
              <span>{name}</span>
              <CloseIcon sx={{ fontSize: "12px", cursor: 'pointer' }} />
            </Box>)}
          </Box>}
          {requireIcon && <RHFUploadFile name={'uploadIcon'} label="Upload Icon"{...methods} />}
          <Box display={'flex'} gap={'10px'} marginTop={'20px'}>
            <Button type="submit" variant="contained" sx={styles.btnStyle}>Add</Button>
            <Button variant="contained" onClick={onClose}>Cancel</Button>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default CategoryModal

const styles = {
  title: {
    textAlign: 'center', fontSize: '30px', fontWeight: 600, mt: 2.5
  },
  btnStyle: {
    background: '#F6830F', '&:hover': { background: '#F6830F' }
  },
  pdfBox: {
    border: '1px solid #CACACA',
    borderRadius: '4px',
    padding: '15px 10px',
    maxWidth: '465px',
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
    mt: '5px',
    mb:2

  },
  pdfTitle: {
    background: 'rgba(196, 196, 196, 0.5)',
    borderRadius: '4px',
    padding: '5px',
    fontSize: '12px',
    fontWeight: 400,
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  btnCircle: {
    minWidth: '30px', mx: '15px', mt: 0.5, height: "30px", width: '30px', borderRadius: '50px'
  }
}