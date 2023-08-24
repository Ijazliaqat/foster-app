import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { useTrainingReport } from './useTraningReport';
import { SELECT_FILTERS } from '.';
import { Card } from '@mui/material';

const TrainingReportTable = () => {
  const { columns, TableDemoData, } =
    useTrainingReport();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title="Trainee info"
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
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
  )
}

export default TrainingReportTable