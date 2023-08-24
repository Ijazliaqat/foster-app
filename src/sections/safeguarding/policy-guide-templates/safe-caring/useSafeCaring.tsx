import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const useSafeCaring = () => {
  const path = "/safeguarding/policy-guide-templates/safe-caring/form";
  const router = useRouter();
  const theme = useTheme();
  let tableHeaderRefTwo = useRef<any>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleClose = () => setIsDeleteModalOpen(false);
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "dewnload":
        alert("Download");
        break;
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
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
      accessorFn: (row: any) => row.safeguarding_policy_document,
      id: "Safeguarding-Policy-Document",
      cell: (info: any) => info.getValue(),
      header: () => <span>Safeguarding Policy Document</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date_uploaded,
      id: "Date Uploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.discription,
      id: "Discription",
      cell: (info: any) => info.getValue(),
      header: () => <span>Discription</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.version,
      id: "Version",
      cell: (info: any) => info.getValue(),
      header: () => <span>Version</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "Author(Role)",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approver,
      id: "Approver(Role)",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approver(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["view", "delete", "edit", "download"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return {
    theme,
    router,
    isDeleteModalOpen,
    columns,
    tableHeaderRefTwo,
    handleClose,
  };
};
