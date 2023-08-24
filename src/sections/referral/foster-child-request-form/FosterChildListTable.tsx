import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Box, Checkbox, Grid } from "@mui/material";
import TableAction from '@root/components/TableAction';
import DeleteModel from '@root/components/modal/DeleteModel';
import { useFosterChildListTable } from './useFosterChildListTable';


const FosterChildList = () => {
  const { FosterChildListTableData,
    IsDeleteModal,setIsDeleteModal,tableHeaderRef,theme,router,SelectFilter}=useFosterChildListTable();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
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
      accessorFn: (row: any) => row.sr,
      id: "sr",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refereeName,
      id: "refereeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referee Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.gender,
      id: "gender",
      cell: (info: any) => info.getValue(),
      header: () => <span>Gender</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfBirth,
      id: "dateOfBirth",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referralDate,
      id: "referralDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referral Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refereeType,
      id: "refereeType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referee type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.specialNeeds,
      id: "specialNeeds",
      cell: (info: any) => info.getValue(),
      header: () => <span>Special Needs</span>,
      isSortable: true,
    },
    {
        id: "actions",
        cell: (info: any) => (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
             <TableAction
              type="delete"
              onClicked={() => setIsDeleteModal(true)}
              size="small"
            />
             <DeleteModel open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
            <TableAction
              type="edit"
               onClicked={() => {
                router.push({ pathname: `/referral/foster-child-request-form/edit-foster-child-request-form/${info.row.original.id}`, query: { action: "edit" } })
              }}
              size="small"
            />
            <TableAction
              type="view"
              onClicked={() => {
                router.push({ pathname: `/referral/foster-child-request-form/edit-foster-child-request-form/${info.row.original.id}`, query: { action: "view" } })
              }}
              size="small"
            />
            
           
          </Box>
        ),
        header: "Actions",
        isSortable: false,
      },
 
  ];
  

  return (
    <Grid container >
    <Grid xs={12} item>
    <TableHeader
        ref={tableHeaderRef}
        title="Referrals"
        searchKey="search"
        selectFilters={SelectFilter}
        showSelectFilters
        showAddBtn
        onAdd={() => {router.push( "/referral/foster-child-request-form/add-foster-child-request-form" )
        }}
       
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={FosterChildListTableData}
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

    </Grid>
  </Grid>
  )
}

export default FosterChildList
