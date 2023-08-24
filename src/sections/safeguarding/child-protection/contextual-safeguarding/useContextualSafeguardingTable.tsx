import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { TableData } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useTheme } from "@mui/material";

export const useContextualSafeguardingTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme()
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
      accessorFn: (row: any) => row.requestFor,
      id: "requestFor",
      cell: (info: any) => info.getValue(),
      header: () => <span>What is your request for?</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childrenName,
      id: "childrenName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Children Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.suspectedPerpetrator,
      id: "suspectedPerpetrator",
      cell: (info: any) => info.getValue(),
      header: () => <span>Suspected Perpetrator</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.locationIncident,
      id: "locationIncident",
      cell: (info: any) => info.getValue(),
      header: () => <span>Location of the Incident</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.summary,
      id: "summary",
      cell: (info: any) => info.getValue(),
      header: () => <span>Summary</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refererName,
      id: "refererName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referer name</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/safeguarding/child-protection/contextual-safeguarding/view-contextual-safeguarging",
                query: { action: "view", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/safeguarding/child-protection/contextual-safeguarding/edit-contextual-safeguarging",
                query: { action: "edit", id: "" },
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
    theme
  };
};
