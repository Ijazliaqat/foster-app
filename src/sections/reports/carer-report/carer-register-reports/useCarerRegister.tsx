import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useState } from "react";

export const useCarerRegister = () => {
  const path = "/reports/carer-reports/carer-register/form";
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDeleteModal = () => setOpenDelete(!openDelete);
  const router = useRouter();
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      case "delete":
        setOpenDelete(true);
        break;
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "print":
        window.print();
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
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
      accessorFn: (row: any) => row.sNO,
      id: "S.NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.primayCarerName,
      id: "primayCarerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Primary Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.secondaryCarerName,
      id: "secondaryCarerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Scondary Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarerAddress,
      id: "fosterCarerAddress",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster carer address</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvalDate,
      id: "approvalDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of approval</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvalCategory,
      id: "approvalCategory",
      cell: (info: any) => info.getValue(),
      header: () => <span>Category of approval</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childrenName,
      id: "childrenName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Number of childern</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.immigrationStatus,
      id: "immigrationStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Immigration status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementType,
      id: "placementType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: "createdDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.modifiedDate,
      id: "modifiedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Modified Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.modifiedBy,
      id: "modifiedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Modified By</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["view", "delete", "edit", "print"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
  return {
    columns,
    handleAction,
    handleCloseDeleteModal,
    openDelete,
    router,
    path,
  };
};
