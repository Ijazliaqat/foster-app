import { Box, Card } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { useConsiderationList } from './useConsiderationList';
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import { considerationList } from '.';

const ConsiderationList = () => {
  const { route, theme } = useConsiderationList();

  const columns = [

    {
      accessorFn: (row: any) => row.carerName,
      id: "Carer Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
    },
    {
      accessorFn: (row: any) => row.childName,
      id: "Child Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
    },
    {
      accessorFn: (row: any) => row.matchResult,
      id: "Match Result",
      cell: (info: any) => info.getValue(),
      header: () => <span>Match Result</span>,
    },
    {
      accessorFn: (row: any) => row.matchingDate,
      id: "Matching Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Matching Date</span>,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <TableAction type="view" onClicked={() => route.push("/matching/recommondations-result/compare-match/")} />
      ),
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title={`${route?.query?.name} Consideration List`}
      />
      <CustomTable
        data={considerationList}
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
        rootSX={{ my: theme.spacing(2) }}
      />
    </Card>
  )
}

export default ConsiderationList