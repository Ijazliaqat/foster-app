import { Box, Checkbox } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableAction from '@root/components/TableAction';
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal';
import DeleteModel from '@root/components/modal/DeleteModel';
import { uploadDocumentData } from '.';
import { useUploadDocument } from './useUploadDocument';

const UploadDocument = ({ disabled }: any) => {

  const {
    openModal,
    deleteModal,
    handleDeleteModal,
    handleOpenModal,
    onSubmit
  } = useUploadDocument();

  const columns = [
    {
      id: "select", header: ({ table }: any) =>
        <Checkbox
          disabled={disabled}
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />,
      cell: ({ row }: any) =>
        <Checkbox
          disabled={row?.original?.Assigned || disabled}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />,
    },
    {
      id: 'srno',
      accessorFn: (row: any) => row.srNo,
      header: () => <span>sr. no</span>,
      cell: (info: any) => info.getValue()
    },
    {
      accessorFn: (row: any) => row.docName,
      id: "docName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
    },
    {
      accessorFn: (row: any) => row.docType,
      id: "docType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
    },
    {
      accessorFn: (row: any) => row.docDate,
      id: "docDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
    },
    {
      id: "actions",
      cell: (info: any) =>
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {!disabled && <TableAction type="download" onClicked={() => alert('download')} />}
          {!disabled && <TableAction type="delete" onClicked={handleDeleteModal} />}
          <TableAction type="view" onClicked={handleOpenModal} />
        </Box>,
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <TableHeader
        title={'Upload Documents'}
        showAddBtn={disabled ? false : true}
        onAdd={handleOpenModal}
      />
      <CustomTable
        data={uploadDocumentData}
        columns={columns}
        currentPage={1}
        isLoading={false} isFetching={false} isError={false} isSuccess={true}
      />
      <UploadDocumentModal
        open={openModal}
        handleClose={handleOpenModal}
        disabled={disabled}
        onSubmit={onSubmit}
      />
      <DeleteModel
        open={deleteModal}
        handleClose={handleDeleteModal}
        onDeleteClick={() => alert('delete')}
      />
    </>
  )
}

export default UploadDocument