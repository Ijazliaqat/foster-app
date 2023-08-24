import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import CustomTable from "@root/components/Table/CustomTable";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";
import Image from "next/image";
import RefreshIcon from "../../../../../assets/svg/Referrals/refresh.svg";
import { UploadDocumentsTableData } from ".";
import { useUploadDocumentsTableData } from "./useUploadDocumentsTable";

const UploadDocumentTable = ({ disabled }: any) => {
  const {
    IsDeleteModal,
    setIsDeleteModal,
    IsOpenDocuementModal,
    setIsOpenDocuementModal,
    tableHeaderRefTwo,
    router,
    actionType,
    setActionType
  } = useUploadDocumentsTableData();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            {!disabled && (
              <Checkbox
                checked={table.getIsAllRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}
              />
            )}
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          {!disabled && (
            <Checkbox
              disabled={row?.original?.Assigned}
              checked={row?.original?.Assigned ? false : row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          )}
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <Box sx={{ cursor: "pointer" }}>
            <Image src={RefreshIcon} alt="RefreshIcon" width={30} height={30} />
          </Box>
          <TableAction
            size="small"
            type="download"
            
            onClicked={() =>
              router.push({
                pathname: "",
                query: { action: "edit", id: "" },
              })
            }
          />
          {!disabled && (
            <TableAction
              size="small"
              type="delete"
              onClicked={() => setIsDeleteModal(true)}
            />
          )}
          <DeleteModel
            open={IsDeleteModal}
            handleClose={() => setIsDeleteModal(false)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() => {console.log(info.row.original.id);  setIsOpenDocuementModal(!IsOpenDocuementModal); setActionType('view')}}/>
            </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>


        <TableHeader
          ref={tableHeaderRefTwo}
          title="Uploaded Documents"
          searchKey="search"
          disabled={disabled}
          showAddBtn={!disabled}
          onAdd={() => {
            setIsOpenDocuementModal(!IsOpenDocuementModal); setActionType('add')
          }}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
     
       
      <CustomTable
        data={UploadDocumentsTableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
      {actionType==='view' ? (
        <UploadDocumentModal
        disabled
        open={IsOpenDocuementModal}
        handleClose={() => setIsOpenDocuementModal(false)}
        />
      ) : (
        <UploadDocumentModal 
        open={IsOpenDocuementModal}
        handleClose={() => setIsOpenDocuementModal(false)}
        isHideSubmitButton
      />
      )}
    </>
  );
};

export default UploadDocumentTable;
