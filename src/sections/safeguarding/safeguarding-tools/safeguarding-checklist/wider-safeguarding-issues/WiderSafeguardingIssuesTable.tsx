
import React from 'react'
import SafeguardingTable from '../safeguarding-table/SafeguardingTable'
import { widerSafeguardingIssuesData } from '.';
import { columns } from '../safeguarding-table/SafeguardingTableColumnData';

const WiderSafeguardingIssues = () => {
  return <SafeguardingTable columns={columns} data={widerSafeguardingIssuesData}/>
}

export default WiderSafeguardingIssues