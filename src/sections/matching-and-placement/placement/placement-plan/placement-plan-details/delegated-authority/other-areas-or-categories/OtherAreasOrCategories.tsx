import { Card, Typography } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { tableData } from '.'
import TableAction from '@root/components/TableAction'
import CategoriesModal from './modal/modal'
import { useOtherAreasOrCategories } from './useOtherAreasOrCategories'

const OtherAreasOrCategories = () => {

  const { openModal, handleOpenModal, handleAction, disableModal, disabled } = useOtherAreasOrCategories();

  const columns = [
    {
      accessorFn: (row: any) => row.consent,
      id: "consent",
      cell: (info: any) => info.getValue(),
      header: () => <span>Consent / agreement / task</span>,
    },
    {
      accessorFn: (row: any) => row.whoHasAuthority,
      id: "whoHasAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span style={styles.thead}>Who has authority to give consent /
        agreement or undertake the task</span>,
    },
    {
      accessorFn: (row: any) => row.notes,
      id: "notes",
      cell: (info: any) => info.getValue(),
      header: () => <span style={styles.thead}>Notes (incl. notifications, prior consultation /
        recording requirement / conditions)</span>,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          type={'view'}
          onClicked={() => handleAction(info.row.original.id)}
        />
      ),
      header: () => <span>Actions</span>,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={styles.title}>Other areas or categories</Typography>
      <TableHeader
        title={'Consent / agreement / task'}
        showAddBtn={disabled ? false : true}
        onAdd={handleOpenModal}
        hideSearch
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={false}
        isError={false}
        isSuccess={true}
        isFetching={false}
      />
      {openModal && <CategoriesModal open={openModal} onClose={handleOpenModal} disabled={disableModal} />}
    </Card>
  )
}

export default OtherAreasOrCategories

const styles = {
  title: {
    color: '#0E918C',
    fontSize: '16px',
    fontWeight: 600,
    margin: '20px 0 30px'
  },
  thead: {
    maxWidth: '320px',
    textWrap: 'wrap'
  }
}