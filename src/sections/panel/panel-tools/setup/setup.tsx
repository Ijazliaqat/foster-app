import { Card } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import PanelCollapsibleTable from '@root/components/panel-collapsible-table'
import { tableDataMock } from '@root/components/panel-collapsible-table/mock-data'
import React from 'react'
import { useSetup } from './useSetup'
import SetupForm from './setup-form/SetupForm'
import DeleteModel from '@root/components/modal/DeleteModel'

const PanelSetup = () => {
  const {
    handleOpenModal,
    handleAction,
    openModal,
    disabled,
    handleDeleteModal,
    deleteModal,
    handleDeleteFunc
  } = useSetup();
  const columns = [
    {
      title: 'Carer Name (Code)',
      render: (data: any) => <span>{data.carerName}</span>
    },
    {
      title: 'Case Name',
      render: (data: any) => <span>{data.caseName}</span>
    },
    {
      title: 'Panel Date',
      render: (data: any) => <span>{data.panelDate}</span>
    },
    {
      title: 'Hearing Time',
      render: (data: any) => <span>{data.hearingTime}</span>
    },
    {
      title: 'Social Worker',
      render: (data: any) => <span>{data.socialWorker}</span>
    },
    {
      title: 'Status',
      render: (data: any) => <span>{data.status}</span>
    },
  ]

  return (
    <>
      <Card sx={{ p: 2 }}>
        <TableHeader
          title={'Panel Case List'}
          showAddBtn
          onAdd={handleOpenModal}
        />
        <PanelCollapsibleTable
          tableData={tableDataMock}
          columns={columns}
          handleAction={handleAction}
        />
      </Card>
      {openModal && <SetupForm disabled={disabled} open={openModal} onClose={handleOpenModal} />}
      {deleteModal && <DeleteModel open={deleteModal} handleClose={handleDeleteModal} onDeleteClick={handleDeleteFunc} />}
    </>
  )
}

export default PanelSetup