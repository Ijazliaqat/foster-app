import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import { BankAccountDetailsTable } from "./BankAccountDetailsTable";
import BankAccountDetailsForm from "./BankAccountDetailsForm";

export default function BankAccountDetailsSection(props: any) {
  const {
    tableData,
    formData,
    searchedText,
    gettingStatus,
    postingStatus,
    editingStatus,
    deletingStatus,
    editedData,
    onDelete,
    modalStatus,
    onPageChange,
  } = props;

  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (i: any) => {
    searchedText(i);
  };
  return (
    <div>
      <TableHeader
        title="Bank Details"
        onChanged={changeHandler}
        showAddBtn
        onAdd={() => setOpenModal(true)}
      />
      <BankAccountDetailsTable
        tableData={tableData}
        onDelete={onDelete}
        editedData={editedData}
        gettingStatus={gettingStatus}
        editingStatus={editingStatus}
        deletingStatus={deletingStatus}
        modalStatus={modalStatus}
        onPageChange={onPageChange}
      />
      <BankAccountDetailsForm
        content={{}}
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) => formData(data)}
        status={postingStatus}
        modalStatus={modalStatus}
      />
    </div>
  );
}
