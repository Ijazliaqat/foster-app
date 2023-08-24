import { Card } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { tableData } from '.'
import TableAction from '@root/components/TableAction'
import { useActionSheet } from './useActionSheet'
import ActionSheetModal from './ActionSheetModal'

const ActionSheet = () => {

  const { handleAction, openModal, handleOpenModal, disabledModal, disabled } = useActionSheet();

  const columns = [
    {
      accessorFn: (row: any) => row.action,
      id: "action",
      cell: (info: any) => info.getValue(),
      header: () => <span>Action</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personResponsible,
      id: "personResponsible",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Responsible</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateToBeAchieved,
      id: "dateToBeAchieved",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date To Be Achieved</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          type={'view'}
          onClicked={() => handleAction(info.row.original.id)}
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 1 }}>
      <TableHeader
        title={'Action sheet - transfer actions identified through the plan into the Care Plan'}
        hideSearch
        showAddBtn={disabled ? false : true}
        onAdd={handleOpenModal}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={false}
        isError={false}
        isSuccess={true}
      />
      {openModal && <ActionSheetModal
        open={openModal}
        onClose={handleAction}
        disabled={disabledModal}
      />}
    </Card>
  )
}

export default ActionSheet