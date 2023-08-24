import { Card } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import React from 'react'
import { TableDemoData } from '.';
import { useUnannouncedHomeVisit } from './useUnannouncedHomeVisit';
import TableHeader from '@root/components/TableHeader';

export const UnannouncedHomeVisitTable = () => {
  const {
    columns,
  } = useUnannouncedHomeVisit();
  return (
    <Card sx={{ px: 1, py: 2, ...styles.main }}>
      <TableHeader title={'Unannounced Home Visit'} />
      <CustomTable
        data={TableDemoData}
        columns={columns}
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
      />
    </Card>
  );
}
const styles = {
  main: {
    '& .MuiStack-root': {
      '& .MuiStack-root': {
        justifyContent: 'initial'
      }
    }
  }
};
