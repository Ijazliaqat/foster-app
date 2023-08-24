import { useState } from "react";
import TaineeListTable from "./tainee-list-table/TaineeListTable";
import { sortingData, sortingByData } from ".";

export const useTraineeList = () => {
  const [items, setitems] = useState("");
  const [addRow, setAddRow] = useState(sortingData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [editRowId, setEditRowId] = useState("");
  const [DeleteModal, setDeleteModal] = useState(false);
  const [modalType, setModalType] = useState({
    type: "",
    value: null,
  });

  const handleChange = (event: any) => {
    setitems(event.target.value);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addRowHandler = (data: any, editRowId: any) => {
    const newObj = {
      id: Math.random(),

      title: data?.title,

      component: <TaineeListTable />,
    };

    const filteredRows = addRow.filter((row: any) => row.id !== editRowId.id);

    setAddRow([...filteredRows, newObj]);
  };

  const handleDeleteModal = (itemToDelete: any) => {
    setDeleteModal(!DeleteModal)
  };

  return {
    items,
    addRow,
    anchorEl,
    editRowId,
    setEditRowId,
    modalType,
    setModalType,
    handleChange,
    handleClick,
    handleClose,
    addRowHandler,
    sortingByData,
    handleDeleteModal,
    DeleteModal
  };
};
