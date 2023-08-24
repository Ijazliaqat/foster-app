/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import BankAccountDetailsForm from "./BankAccountDetailsForm";
import DeleteModel from "@root/components/modal/DeleteModel";

// ----------------------------------------------------------------------
export const BankAccountDetailsTable = (props: any) => {
  const {
    readOnly,
    gettingStatus,
    tableData,
    editedData,
    editingStatus,
    deletingStatus,
    onDelete,
    onPageChange,
    modalStatus,
  } = props;
  //modal states
  const [openDeleteModal, setOpenDeleteModal] = useState<any>(false);
  const [openFormModalWithData, setOpenFormModalWithData] =
    useState<any>(false);

  // ----------------------------------------------------------------------
  useEffect(() => {
    // close modal upon successful deletion otherwise leave it open
    deletingStatus?.isSuccess && setOpenDeleteModal(false);
  }, [deletingStatus?.isSuccess]);
  //-------------------------------------Table Column--------------------------------------
  const columns = [
    {
      accessorFn: (row: any) => row.accountNumber,
      id: "Account Number",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Number</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row: any) => row.sortName,
      id: "Sort Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sort Name</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row: any) => row.bankName,
      id: "Name of the Bank",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of the Bank</span>,
    },
    {
      accessorFn: (row: any) => row.accountName,
      id: "Account Name",
      cell: (info: any) => info.getValue(),
      header: "Account Name",
    },
    {
      accessorFn: (row: any) => row.accountType,
      id: "Account Type",
      cell: (info: any) => info.getValue(),
      header: "Account Type",
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() => setOpenFormModalWithData(info)}
            size="small"
          />
          <TableAction
            type="delete"
            onClicked={() => setOpenDeleteModal(info.row?.original)}
            size="small"
          />

          <BankAccountDetailsForm
            content={info}
            readOnly
            btnType="view"
            modalStatus={() => {}}
            closeModal={() => {}}
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  //---------------------------------------------------------------------------------------

  return (
    <Grid container>
      {/* edit form in a modal */}
      <BankAccountDetailsForm
        openModal={openFormModalWithData}
        content={openFormModalWithData}
        status={editingStatus}
        modalStatus={modalStatus}
        closeModal={() => {
          setOpenFormModalWithData(false);
        }}
        formData={(data: any) =>
          editedData({
            id: openFormModalWithData.row?.original?.id,
            body: data,
          })
        }
      />
      <DeleteModel
        open={openDeleteModal}
        onDeleteClick={() => {
          onDelete(openDeleteModal?.id);
          setOpenDeleteModal(false);
        }}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
      />
      <CustomTable
        data={tableData?.carer_bank_detail}
        columns={columns}
        isLoading={gettingStatus?.isLoading}
        isFetching={gettingStatus?.isFetching}
        isError={gettingStatus?.isError}
        isSuccess={gettingStatus?.isSuccess}
        totalPages={tableData?.meta?.pages}
        currentPage={tableData?.meta?.page}
        onPageChange={onPageChange}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Grid>
  );
};
