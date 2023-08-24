import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useState } from "react";

export const useReviewingOfficer = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const router = useRouter();
  const path = "/reports/child-reports/reviewing-officer/form";
  const handleSearch = () => {};
  const handleCloseDeleteModal = () => setOpenDelete(!openDelete);
  const handleAction = (action?: string, id?: string) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
        break;
      case "edit":
        router.push({ pathname: path+"/edit" });
        break;
      case "view":
        router.push({ pathname: path+"/view" });
        break;
      case "delete":
        setOpenDelete(true);
        break;
      case "print":
        window.print();
      default:
        break;
    }
  };


  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row, table }: any) => (
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfReviewingMeeting,
      id: "dateOfReviewingMeeting",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Review Meeting</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reviewingOfficer,
      id: "reviewingOfficer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reviewing Officer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.supervisingSocialWorker,
      id: "supervisingSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarers,
      id: "fosterCarers",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer(s)</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "delete", "view", "print"].map((action: string) => (
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
    handleSearch,
    handleAction,
    openDelete,
    columns,
    handleCloseDeleteModal,
  };
};
