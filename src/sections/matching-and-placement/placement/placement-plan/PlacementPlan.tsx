import React from 'react'
import { Box, Card } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import TableAction from '@root/components/TableAction'
import { useRouter } from 'next/router'

const PlacementPlan = () => {

  const router = useRouter();

  const data = [
    {
      id: '1',
      fosterCarer: 'Gloria Bell',
      fosterChild: 'Shaun Murphy',
      matchResult: '98%',
      matchingDate: '12/07/2023'
    }
  ]
  const columns = [
    {
      accessorFn: (row: any) => row.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterChild,
      id: "fosterChild",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Child</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.matchResult,
      id: "matchResult",
      cell: (info: any) => info.getValue(),
      header: () => <span>Match Result</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.matchingDate,
      id: "matchingDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Match Date</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "view"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => router.push({
                  pathname: '/placement/placement-plan/placement-plan-details',
                  query: { action, id: info.row.original.id }
                }
                )}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ]

  return (
    <Card sx={{ p: 1 }}>
      <TableHeader
        title={'Placement List'}
        hideSearch
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isSuccess={true}
        isError={false}
      />
    </Card>
  )
}

export default PlacementPlan