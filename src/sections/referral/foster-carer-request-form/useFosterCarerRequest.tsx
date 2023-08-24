import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { SELECT_FILTERS, tableData } from ".";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";

export const useFosterCarerRequest = () => {
  const [DeleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => setDeleteModal(!DeleteModal);
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const path = "/referral/foster-carer-request-form/form";
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (value: any) => setCurrentTab(value);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
        break;
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      case "delete":
        handleDeleteModal();
        break;
      default:
        break;
    }
  };

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
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
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
      accessorFn: (row: any) => row.dob,
      id: "dob",
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
      accessorFn: (row: any) => row.referredBy,
      id: "referredBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referred By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referrerRole,
      id: "referrerRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referrer Role</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["delete", "edit", "view"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
          <DeleteModel
            open={DeleteModal}
            handleClose={handleDeleteModal}
            onDeleteClick={handleDeleteModal}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    router,
    tableHeaderRefTwo,
    SELECT_FILTERS,
    tableData,
    columns,
    theme,
    handleNextTab,
    handlePreviousTab,
    currentTab,
    handleTabChange,
  };
};
