import React from 'react'
import SafeguardingTable from '../safeguarding-table/SafeguardingTable'
import { data } from '.';
import { columns } from '../safeguarding-table/SafeguardingTableColumnData';

const SafeguardingEssentials = () => {
  return <SafeguardingTable columns={columns} data={data}/>
}

export default SafeguardingEssentials