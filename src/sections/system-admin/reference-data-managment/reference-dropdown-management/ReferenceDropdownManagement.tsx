import { Box, Card, Checkbox } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { useReferenceDropdownManagement } from './useReferenceDropdownManagement'
import { referenceDropdownManagementData } from '.'

const ReferenceDropdownManagement = () => {
    const { theme } = useReferenceDropdownManagement();

    const columns = [
        {
          id: "select",
          header: ({ table, row }: any) => { 
            return (
              <Box>
                <Checkbox
                  checked={table.getIsAllRowsSelected()}
                  onChange={table.getToggleAllRowsSelectedHandler()}
                />
              </Box>
            );
          },
          cell: ({ row, table }: any) => (
            <Box>
              <Checkbox
                disabled={row?.original?.Assigned}
                checked={row?.original?.Assigned ? false : row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            </Box>
          ),
        },
        {
          accessorFn: (row: any) => row.extendedCodes,
          id: "DfE extended",
          cell: (info: any) => info.getValue(),
          header: () => <span>DfE extended</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.approvedExtended,
          id: "Approved extended ",
          cell: (info: any) => info.getValue(),
          header: () => <span>Approved extended</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.mainCode,
          id: "DfE main code",
          cell: (info: any) => info.getValue(),
          header: () => <span>DfE main code</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.subCategory,
          id: "Sub- category",
          cell: (info: any) => info.getValue(),
          header: () => <span>Sub- category</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.mainCategory,
          id: "Main category",
          cell: (info: any) => info.getValue(),
          header: () => <span>Main category</span>,
          isSortable: true,
        },
        {
          accessorFn: (row: any) => row.comments,
          id: "Comments",
          cell: (info: any) => info.getValue(),
          header: () => <span>Comments</span>,
          isSortable: true,
        },
      ];

    return (
        <Card sx={{ p: 2 }} className="reference-data-management">
            <TableHeader
                title="Religion"
            />
            <CustomTable
              data={referenceDropdownManagementData}
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

export default ReferenceDropdownManagement