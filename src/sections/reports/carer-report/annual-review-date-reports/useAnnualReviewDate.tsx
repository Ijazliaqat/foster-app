import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useState } from "react";

export const useAnnualReviewDate = () => {
  const path = "/reports/carer-reports/annual-review-date/form";
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
      accessorFn: (row: any) => row.carerCode,
      id: "carerCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer code</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvalDate,
      id: "approvalDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Approval</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.previousReviewDate,
      id: "previousReviewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Previous to Last Review Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.lastReviewDate,
      id: "lastReviewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Last Review Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.nextReviewDate,
      id: "nextReviewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Next Review Due Date</span>,
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
