import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import {Grid } from "@mui/material";


import { SafeguardingMeetingTableData } from '.';
import { SafeguardingTableColumns, useSafeGuardingMeetingTable } from './useSafeGuardingMeetingTable';

const SafeguardingMeeting = () => {
const {tableHeaderRef,
  theme,
  router}=useSafeGuardingMeetingTable()
 
  return (
    <Grid container >
    <Grid xs={12} item>
    <TableHeader
        ref={tableHeaderRef}
        title="Safeguarding Meetings"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            "/safeguarding/safeguarding-tools/safeguarding-meetings/add-safeguarding-meetings"
          )
        }}
       
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={SafeguardingMeetingTableData}
        columns={SafeguardingTableColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />

    </Grid>
  </Grid>
  )
}

export default SafeguardingMeeting
