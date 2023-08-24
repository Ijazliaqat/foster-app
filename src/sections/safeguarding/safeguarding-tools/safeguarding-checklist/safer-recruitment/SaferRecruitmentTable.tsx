import React from 'react'
import SafeguardingTable from '../safeguarding-table/SafeguardingTable'
import { saferRecruitmentData } from '.';
import { columns } from '../safeguarding-table/SafeguardingTableColumnData';

const SaferRecruitment = () => {
  return <SafeguardingTable columns={columns} data={saferRecruitmentData}/>
}

export default SaferRecruitment