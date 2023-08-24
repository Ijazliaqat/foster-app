import { Button, Card, Dialog, DialogContent, Grid, Typography } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import DeleteModel from '@root/components/modal/DeleteModel'
import CollapsibleTable from '@root/components/Table/collapsible-table'
import React, { useRef } from 'react'
import { useChildAbuseExpolitationManagement } from './useChildAbuseExpolitationManagement'
import { rowsData } from '.'

const ChildAbuseExpolitationManagement = () => {
  const tableHeaderRef = useRef();
  const {
    deleteModal,
    openModal,
    columns,
    innerColums,
    handleDeleteModal,
    handleOpenModal,
    handleAction,
    handleRoute
  } = useChildAbuseExpolitationManagement();
  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          title={'Child Abuse and Exploitation Management '}
          showAddBtn
          onAdd={handleOpenModal}
          onChanged={((params: any) => { })}
        />
        <CollapsibleTable
          requireCheckbox
          columns={columns}
          innerColums={innerColums}
          tableData={rowsData}
          requireAction
          actionArray={['edit', 'delete', 'view']}
          handleAction={(action: string, row: any) => handleAction(action, row)}
        />
      </Card>
      <Dialog open={openModal} maxWidth='sm' onClose={handleOpenModal}>
        <DialogContent>
          <Typography sx={styles.title}>Select Safeguading - Child Abuse and Exploitation Management</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                sx={styles.modalBtn}
                onClick={() => handleRoute('child-criminal-exploitation')}
              >Child Criminal Exploitation Full</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant='contained'
                size='large'
                sx={styles.modalBtn}
                onClick={() => handleRoute('child-sexual-exploitation')}
              >Child Sexual Exploitation (CSE)</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <DeleteModel
        open={deleteModal}
        handleClose={handleDeleteModal}
        onDeleteClick={() => { }}
      />

    </>
  )
}

export default ChildAbuseExpolitationManagement

const styles = {
  title: { mb: 2, fontSize: 15, fontWeight: 700 },
  modalBtn: { height: 94, borderRadius: '10px' }
}