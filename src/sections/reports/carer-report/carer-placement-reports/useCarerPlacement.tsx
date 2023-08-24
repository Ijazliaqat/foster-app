import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useState } from "react";

export const useCarerPlacement = () => {
  const path = "/reports/carer-reports/carer-placement/form";
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
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
 
    {
      accessorFn: (row: any) => row.DOB,
      id: "DOB",
      cell: (info: any) => info.getValue(),
      header: () => <span>D.O.B</span>,
      isSortable: true,
    },
 
    {
      accessorFn: (row: any) => row.disability,
      id: "disability",
      cell: (info: any) => info.getValue(),
      header: () => <span>Disability</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementDate,
      id: "placementDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementEndDate,
      id: "placementEndDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement End Date</span>,
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
      accessorFn: (row: any) => row.localAuthority,
      id: "localAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.CreatedDate,
      id: "CreatedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Create Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.CreatedBy,
      id: "CreatedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Create By</span>,
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
    path
  };
};
