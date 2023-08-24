import React from 'react'
import SafeguardingTable from '../safeguarding-table/SafeguardingTable'
import { involvingCommunitiesData } from '.';
import { columns } from '../safeguarding-table/SafeguardingTableColumnData';

const InvolvingCommunities = () => {
  return <SafeguardingTable  data={involvingCommunitiesData} columns={columns}/>
}

export default InvolvingCommunities