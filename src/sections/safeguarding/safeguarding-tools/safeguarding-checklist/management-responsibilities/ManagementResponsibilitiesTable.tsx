
import React from 'react'
import SafeguardingTable from '../safeguarding-table/SafeguardingTable'
import { managementResponsibilitiesData } from '.';
import { columns } from '../safeguarding-table/SafeguardingTableColumnData';

const ManagementResponsibilities = () => {
  return <SafeguardingTable columns={columns} data={managementResponsibilitiesData}/>
}

export default ManagementResponsibilities