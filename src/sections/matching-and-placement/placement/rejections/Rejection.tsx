import { Box, Card } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { SELECT_FILTERS, tableData } from '.';
import TableAction from '@root/components/TableAction';
import { useRejection } from './useRejection';
import DeleteModel from '@root/components/modal/DeleteModel';

const Rejection = () => {

  const { deleteModal, handleDeleteModal, handleAction } = useRejection();

  const columns = [
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.rejectionDate,
      id: "rejectionDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Rejection Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementType,
      id: "placementType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.rejectionReason,
      id: "rejectionReason",
      cell: (info: any) => info.getValue(),
      header: () => <span>Rejection Reason</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.agencySocialWorker,
      id: "agencySocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Agency Social Worker (SSW)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.localAuthoritySW,
      id: "localAuthoritySW",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority SW</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.voiceMemoRejection,
      id: "voiceMemoRejection",
      cell: (info: any) => info.getValue(),
      header: () => <span>Voice Memo on Rejection</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "delete"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>Actions</span>,
    },
  ];


  return (
    <Card sx={styles.card}>
      <TableHeader
        title={'Placement Rejections'}
        showAddBtn
        onAdd={() => handleAction('add')}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
      />
      <CustomTable
        isLoading={false}
        isError={false}
        isSuccess={true}
        data={tableData}
        columns={columns}
      />
      {deleteModal && <DeleteModel
        open={deleteModal}
        handleClose={handleDeleteModal}
        onDeleteClick={() => { }}
      />}
    </Card>
  )
}

export default Rejection

const styles = {
  card: {
    py: 2, px: 1,
    '& .MuiStack-root': {
      '& .MuiButtonBase-root': {
        marginLeft: '15px'
      }
    }
  }
}