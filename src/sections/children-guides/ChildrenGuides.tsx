import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal';
import { useChildrenGuides } from './useChildrenGuides';
import { ChildrenGuidesArray } from '.';
import PdfViewModal, { PdfViewFile } from '@root/components/modal/PdfViewModal/PdfViewModal';

const ChildrenGuides = () => {
  const { addModal, handleModal, handleClosePdfModal, handleOpenPdfModal, pdfFile, pdfModal } = useChildrenGuides();
  return (
    <>
      <Grid container spacing={2}>
        {ChildrenGuidesArray.map((obj, i) => (
          <Grid item xl={3} lg={4} md={6} xs={12} key={i}>
            <Box sx={styles.box}>
              <Box sx={styles.pdfSection}>
                <PdfViewFile fileUrl={obj.file} />
              </Box>
              <Box sx={styles.download}>
                <Typography sx={styles.title} onClick={() => handleOpenPdfModal(obj.file)}>{obj.title}</Typography>
                <DownloadForOfflineIcon sx={styles.downloadIcon} />
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xl={3} lg={4} md={6} xs={12}>
          <Box sx={styles.addNew} onClick={handleModal}>
            <AddCircleIcon sx={styles.addNewIcon} />
            <Typography sx={styles.addNewTitle}>Add New</Typography>
          </Box>
        </Grid>
      </Grid>

      {addModal && <UploadDocumentModal
        open={addModal}
        handleClose={handleModal}
        disabled={false}
        onSubmit={(data: any) => { }}
        label="Upload File"
        isHideSubmitButton
      />}
      {pdfFile && <PdfViewModal fileUrl={pdfFile} open={pdfModal} onClose={handleClosePdfModal} />}
    </>
  )
}

export default ChildrenGuides


const styles = {
  box: {
    minHeight: '250px',
    background: '#FFFFFF',
    boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
    borderRadius: '10px',
  },
  pdfSection: {
    height: '175px',
    overflow: 'auto',
    padding: '12px 15px',
    background: '#CACACA',
    borderRadius: '10px 10px 0px 0px'
  },
  download: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '100%'
  },
  title: {
    color: '#000000',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer'
  },
  downloadIcon: { fontSize: '24px', color: "#198754", cursor: "pointer" },
  addNew: {
    border: '4px dashed #D5D5D5',
    borderRadius: '10px',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  addNewIcon: {
    color: '#F6830F',
    fontSize: '60px'
  },
  addNewTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#212529',
    marginTop: '17px'
  }
}