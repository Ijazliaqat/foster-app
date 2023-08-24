import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { TableData } from ".";
import { Box, Checkbox, Switch } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useTheme } from "@mui/material";

export const useApiInventoryTable = () => {
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
      accessorFn: (row: any) => row.apiName,
      id: "apiName",
      cell: (info: any) => info.getValue(),
      header: () => <span>API Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.apiKey,
      id: "apiKey",
      cell: (info: any) => info.getValue(),
      header: () => <span>API Key</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.expiryDate,
      id: "expiryDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Expiry Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.apiLink,
      id: "apiLink",
      cell: (info: any) => info.getValue(),
      header: () => <span>API Link</span>,
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
      accessorFn: (row: any) => row.hitsPerMinute,
      id: "hitsPerMinute",
      cell: (info: any) => info.getValue(),
      header: () => <span>Hits per minute</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.averageResponseTime,
      id: "averageResponseTime",
      cell: (info: any) => info.getValue(),
      header: () => <span>Average Response Time</span>,
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
                pathname: "/system-admin/api-inventory/edit-api-inventory-form",
                query: { action: "edit", id: "" },
              })
            }
          />
          {/* <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname: "/system-admin/api-inventory/view-api-inventory-form",
                query: { action: "view", id: "" },
              })
            }
          /> */}
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
