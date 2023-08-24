import React from 'react'
import TableHeader from '@root/components/TableHeader'
import CollapsibleTable from '@root/components/Table/collapsible-table'
import ShareModal from '@root/components/modal/shareModal'
import { columns, innerColums, rowsData } from '.'
import { useSafeguardingMeasuresChildTable } from './useSafeguardingMeasuresChildTable'

const SafeguardingMeasuresChildTable = () => {
  const {  route, isShareModalOpen, setIsShareModalOpen, tableHeaderRef, allegationRoute } = useSafeguardingMeasuresChildTable()

  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        title={'Safeguarding Measures ( During Child Placement )'}
        onPrint={()=>{window.print()}}
        showAddBtn
        showPrintBtn
        showShareBtn
        onShare={() => setIsShareModalOpen(true)}
      />
      <CollapsibleTable
        requireCheckbox
        handleView={() => route.push(`${allegationRoute}/add-allegation-management`)}
        columns={columns}
        innerColums={innerColums}
        tableData={rowsData}
      />
      <ShareModal open={isShareModalOpen} data={[{ email: 'hassan@gmail.com' }]} handleClose={() => setIsShareModalOpen(false)} />
    </>
  )
}

export default SafeguardingMeasuresChildTable;
