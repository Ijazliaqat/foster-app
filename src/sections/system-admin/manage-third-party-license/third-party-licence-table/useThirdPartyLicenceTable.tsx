import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { TableData } from ".";
import { Box, Checkbox, Switch } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useTheme } from "@mui/material";

export const useThirdPartyLicenceTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const [cancelDelete, setCancelDelete] = useState(false);

  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
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
      accessorFn: (row: any) => row.Name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.typeOfLicense,
      id: "typeOfLicense",
      cell: (info: any) => info.getValue(),
      header: () => <span>Type of License</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.description,
      id: "description",
      cell: (info: any) => info.getValue(),
      header: () => <span>Description</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.guide,
      id: "guide",
      cell: (info: any) => info.getValue(),
      header: () => <span>Guide</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.phone,
      id: "phone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.averageResponseTime,
      id: "enable-disable",
      cell: (info: any) => (
        <Switch inputProps={{ "aria-label": "Switch demo" }} defaultChecked />
      ),
      header: () => <span>Enable/Disable</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/system-admin/manage-third-party-license/edit-third-party-license-form",
                query: { action: "edit", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/system-admin/manage-third-party-license/view-third-party-license-form",
                query: { action: "view", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="delete"
            onClicked={() => setCancelDelete(!cancelDelete)}
          />

          <DeleteModel
            open={cancelDelete}
            onDeleteClick={handleDelete}
            handleClose={() => setCancelDelete(!cancelDelete)}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return {
    tableHeaderRefTwo,
    router,
    TableData,
    columns,
    theme,
  };
};
