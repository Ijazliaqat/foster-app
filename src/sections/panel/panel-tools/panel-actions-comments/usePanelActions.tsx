import { useState } from "react";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

 // ==========================================================
 
export const usePanelActions = () => {
  const theme = useTheme();
  const router = useRouter();
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleClose = () => setIsDeleteModal(false);

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        return (
          <Box>
            <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
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
      header: () => <span>Carer Name (Code)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.caseName,
      id: "caseName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Case Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.panelDate,
      id: "panelDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Panel Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.hearingTime,
      id: "hearingTime",
      cell: (info: any) => info.getValue(),
      header: () => <span>Hearing Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.socialWorker,
      id: "socialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.actionsComments,
      id: "actionsComments",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions/Comments</span>,
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
              router.push({ pathname: `/panel/panel-tools/action-comment/action-comment-form/${info.row.original.id}`, query: { action: "edit" } })
            }
          />
          <TableAction size="small" type="delete" onClicked={() => setIsDeleteModal(true)} />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({ pathname: `/panel/panel-tools/action-comment/action-comment-form/${info.row.original.id}`, query: { action: "view" } })
            }
          />
        </Box>
      ),
      header: () => <span>action</span>,
      isSortable: false,
    },
  ];

  return {
    columns,
    theme,
    isDeleteModal,
    handleClose,
    router,
  };
};