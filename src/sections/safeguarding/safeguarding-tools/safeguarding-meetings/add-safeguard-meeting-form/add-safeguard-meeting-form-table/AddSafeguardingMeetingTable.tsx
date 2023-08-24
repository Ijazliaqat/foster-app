import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { SafguardingMeetingFormTableColumns, useAddSafeguardingMeetingTable } from './useAddSafeguardingMeetingTable';
import { SafguardingMeetingFormTableData } from '.';
import { Grid} from '@mui/material';

const AddSafeguardingMeetingTable = () => {
  const {theme}=useAddSafeguardingMeetingTable()
     
  return (
    <Grid container>
    <Grid xs={12} item>
      <CustomTable
        data={SafguardingMeetingFormTableData}
        columns={SafguardingMeetingFormTableColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        isPagination={false}
        rootSX={{ my: theme.spacing(2) }}
      />
    </Grid>
  </Grid>
  )
}

export default AddSafeguardingMeetingTable