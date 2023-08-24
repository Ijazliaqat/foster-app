import { Box, Card, Checkbox } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import useCurrentReferral from './useCurrentReferral';
import { currentReferralData } from '.';

const CurrentReferralTable = () => {

  const { SELECT_FILTERS } = useCurrentReferral();

  const router = useRouter();
  const path = '/referral/current-referral';

  const columns = [
    {
      id: "select", header: ({ table }: any) =>
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />,
      cell: ({ row }: any) =>
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />,
    },
    {
      id: 'profile',
      accessorFn: (row: any) => row.profile,
      header: () => <span>Profile Image</span>,
      cell: (info: any) => <Image src={info.getValue()} alt='profile' height={40} width={40} style={{ margin: '0 auto' }} />
    },
    {
      id: "refereeName",
      accessorFn: (row: any) => row.refereeName,
      header: () => <span>Referee Name</span>,
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.refereeType,
      id: "refereeType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referee Type</span>,
    },
    {
      accessorFn: (row: any) => row.DOB,
      id: "DOB",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of birth</span>,
    },
    {
      accessorFn: (row: any) => row.localAuthority,
      id: "localAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority</span>,
    },
    {
      id: "actions",
      cell: (info: any) =>
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="edit" onClicked={() => router.push({ pathname: `${path}/${info.row.original.id}`, query: { action: 'edit' } })} />
          <TableAction type="view" onClicked={() => router.push({ pathname: `${path}/${info.row.original.id}`, query: { action: 'view' } })} />
        </Box>,
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ]

  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title={'Prospective Referral'}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={() => { }}
      />
      <CustomTable
        data={currentReferralData}
        columns={columns}
        currentPage={1}
        isLoading={false} isFetching={false} isError={false} isSuccess={true}
      />
    </Card>
  )
}

export default CurrentReferralTable