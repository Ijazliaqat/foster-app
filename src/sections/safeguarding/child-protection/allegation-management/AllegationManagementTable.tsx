import React from 'react'
import { Card } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import CollapsibleTable from '@root/components/Table/collapsible-table'
import { columns, innerColums, rowsData } from '.'
import DeleteModel from '@root/components/modal/DeleteModel'
import { useAllegationManagementTable } from './useAllegationManagementTable'

const AllegationManagementTable = () => {
  const { handleTableAction, isDeleteModal, tableHeaderRef, route, allegationRoute, setIsDeleteModal } = useAllegationManagementTable()
  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          title={'Allegation Management'}
          showAddBtn
          onChanged={((params: any) => { })}
          onAdd={() => route.push(`${allegationRoute}/add`)}
        />
        <CollapsibleTable
          requireCheckbox
          columns={columns}
          innerColums={innerColums}
          tableData={rowsData}
          requireAction
          actionArray={["view", "edit", "delete"]}
          handleAction={(action: any, row: any) => handleTableAction(action, row)}
        />
      </Card>
      <DeleteModel
        open={isDeleteModal}
        handleClose={() => setIsDeleteModal(false)}
      />
    </>
  )
}

export default AllegationManagementTable;
